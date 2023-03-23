const dispatcher = BdApi.Webpack.getModule(m => m.subscribe && m.dispatch);

const inviteActions = BdApi.Webpack.getModule(m => m.resolveInvite);

const InviteModalStore = BdApi.Webpack.getModule(m => m.getName?.() === "InviteModalStore");
const { isOpen: originalIsOpen } = InviteModalStore;

const native = BdApi.Webpack.getModule(m => m.minimize && m.requireModule);
const { minimize: originalMinimize } = native;

const GuildStore = BdApi.Webpack.getModule(m => m.getName?.() === "GuildStore");

const transitionTo = BdApi.Webpack.getModule((m) => typeof m === "function" && String(m).includes(`"transitionTo - Transitioning to "`), { searchExports: true });

const cachedInvites = new Map();

/**
 * @note
 * 0 === ERR
 * 1 === SUCCESS
 * 2 === ALREADY JOINED
 */
async function joinGuild(code: string, id: string): Promise<0 | 1 | 2> {
  const guild = GuildStore.getGuild(id);
  if (guild) {
    BdApi.UI.showToast(`Going to ${guild.name}`, { icon: true, type: "info" });
    transitionTo(`/channels/${guild.id}`);
    return 2;
  };

  if (!cachedInvites.has(code)) {
    BdApi.UI.showToast(`Resolving invite '${code}'`, { icon: true, type: "info" });
    
    const { invite } = await inviteActions.resolveInvite(code, "Desktop Modal");
    cachedInvites.set(code, invite);

    if (!invite) {
      BdApi.UI.showToast(`Unable to resolve invite '${code}'`, { icon: true, type: "danger" });
      return 0;
    }

    BdApi.UI.showToast(`Invite '${code}' resolved`, { icon: true, type: "info" });
  }
  else {
    const invite = cachedInvites.get(code);
    if (invite.expires_at && (new Date(invite.expires_at).getTime() < Date.now())) {
      BdApi.UI.showToast(`Invite expired '${code}'`, { icon: true, type: "danger" });
      return 0;
    }
  };
  
  const invite = cachedInvites.get(code);
  if (!invite) return 0;
  if (invite.guild.id !== id) {
    BdApi.UI.showToast(`Id for '${code}' is incorrect`, { icon: true, type: "danger" });
    return 0;
  };

  InviteModalStore.isOpen = () => true;
  native.minimize = () => {};

  await dispatcher.dispatch({ type: "INVITE_MODAL_OPEN", invite });

  setTimeout(() => {
    InviteModalStore.isOpen = originalIsOpen;
    native.minimize = originalMinimize;
  });
  
  return 1;
};

export default joinGuild;