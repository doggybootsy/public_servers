import React, { useMemo, useState } from "react";

import data, { type server } from "../data";

const Button = BdApi.Webpack.getModule(m => m.Sizes && m.BorderColors, { searchExports: true });
const Warning = BdApi.Webpack.getModule(m => m.toString?.().includes("11.25 14C11.25 14.691 10.69 15.25 10 15.25Z"));
const Tooltip = BdApi.Components.Tooltip as React.ComponentClass<{
  text: React.ReactNode, 
  hideOnClick?: boolean, 
  children: (props: {
    "aria-label": string,
    onBlur: () => void,
    onClick: () => void,
    onContextMenu: () => void,
    onFocus: () => void,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
  }) => React.ReactNode
}>;
const GuildStore = BdApi.Webpack.getModule(m => m.getName?.() === "GuildStore");
const UserStore = BdApi.Webpack.getModule(m => m.getName?.() === "UserStore");
const useStateFromStores = BdApi.Webpack.getModule(m => m.toString().includes("useStateFromStores"));
const scollerClasses = BdApi.Webpack.getModule(m => m.scrollerBase && m.customTheme);
const { DEFAULT_AVATARS } = BdApi.Webpack.getModule(m => m.DEFAULT_AVATARS);
const intl = BdApi.Webpack.getModule(m => m.Messages);

const dateFormatter = new Intl.DateTimeFormat();
const numberFormatter = new Intl.NumberFormat();

const nsfwKeywords = new Set([
  "nsfw"
]);

function makeURL(server: server, animate: boolean) {
  if (!server.icon) return;
  if (animate && server.icon.startsWith("a_")) return `https://cdn.discordapp.com/icons/${server.identifier}/${server.icon}.gif`;
  return `https://cdn.discordapp.com/icons/${server.identifier}/${server.icon}.png`;
};

function Card(server: server) {
  const state = data.useState();
  
  const joinedGuild = useStateFromStores([ GuildStore ], () => server.identifier in GuildStore.getGuilds());
  const currentUser = useStateFromStores([ UserStore ], () => UserStore.getCurrentUser());

  const [ hovering, setHovering ] = useState(false);

  const formattedDate = useMemo(() => dateFormatter.format(new Date(server.insertDate * 1000)), [ ]);
  const members = useMemo(() => numberFormatter.format(server.members), [ ]);
  
  const [ joining, setJoining ] = useState(false);

  const defaultIcon = useMemo(() => DEFAULT_AVATARS[Math.floor(Math.random() * DEFAULT_AVATARS.length)], [ ]);

  const icon = useMemo(() => makeURL(server, hovering), [ hovering ]);
  const [ error, setError ] = useState(!icon);

  // Very very basic nsfw search
  const isNsfw = useMemo(() => nsfwKeywords.has((server as any).mainKeyword) || server.keywords.some((keyword: string) => nsfwKeywords.has(keyword.toLowerCase())), [ ]);
  const canJoin = useMemo(() => state.authToken ? isNsfw ? currentUser.nsfwAllowed : true : false, [ currentUser, state ]);
  
  return (
    <li className="pb-card" data-nsfw={isNsfw} onMouseOver={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <div className="pb-card-header">
        <div className="pb-card-splash">
          <img className="pb-card-banner" src={error ? defaultIcon : server.iconUrl} alt={server.name} onError={() => setError(true)} />
        </div>
        <img className="pb-card-icon" src={error ? defaultIcon : icon} alt={server.name} width={40} height={40} />
      </div>
      <div className="pb-card-join">
        <Button
          size={Button.Sizes.SMALL}
          disabled={!canJoin || joinedGuild || joining}
          onClick={async () => {
            setJoining(true);
            await data.joinServer(server);
            setJoining(false);
          }}
        >{joinedGuild ? intl.Messages.JOINED_GUILD : joining ? intl.Messages.JOINING_GUILD : canJoin ?  intl.Messages.JOIN_GUILD : "Cannot Join"}</Button>
      </div>
      <div className="pb-card-info">
        <div className="pb-card-name">
          {isNsfw && (
            <Tooltip
              hideOnClick={false}
              text="NSFW"
            >
              {props => (
                <span {...props} className="pb-nsfw-tag">
                  <Warning width={14} height={14} color="var(--info-danger-foreground)" />
                </span>
              )}
            </Tooltip>
          )}
          {server.name}
        </div>
        <div className={`pb-card-description ${scollerClasses.thin} ${scollerClasses.fade}`}>{server.description}</div>
        <div className="pb-card-innerInfo">
          <div className="pb-card-infoItem">
            <div className="pb-card-dot" />
            <div className="pb-card-infoValue">{members} {intl.Messages.MEMBERS}</div>
          </div>
          <div className="pb-card-infoItem">
            <div className="pb-card-dot" />
            <div className="pb-card-infoValue">{formattedDate}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;