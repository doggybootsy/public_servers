/**
 * @name public_servers
 * @description A alternative to BD's official public servers
 * @version 1.0.0
 * @author Doggybootsy
 */
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value), __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
}, __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/styles.css
var styles_default, init_styles = __esm({
  "src/styles.css"() {
    styles_default = `.pb-categories {\r
  flex: 0 1 240px;\r
  min-width: 240px;\r
  background: var(--background-secondary);\r
  overflow: hidden;\r
}\r
.pb-scroller {\r
  overflow: hidden scroll;\r
  height: 100%;\r
  padding: 8px 0;\r
}\r
.pb-button {\r
  margin-left: 8px;\r
  margin-bottom: 8px;\r
  padding: 8px 6px;\r
  border-radius: 4px;\r
  color: var(--interactive-normal);\r
  cursor: pointer;\r
}\r
.pb-button:hover {\r
  color: var(--interactive-hover);\r
  background: var(--background-modifier-hover);\r
}\r
.pb-button:active {\r
  color: var(--interactive-active);\r
  background: var(--background-modifier-active);\r
}\r
.pb-button.pb-selected {\r
  color: var(--interactive-active);\r
  background: var(--background-modifier-selected);\r
}\r
.pb-seperator {\r
  height: 1px;\r
  background: var(--background-secondary-alt);\r
  margin-left: 8px;\r
  margin-bottom: 8px;\r
}\r
.pb-content {\r
  display: flex;\r
  flex-direction: column;\r
  flex: 1 1 auto;\r
  overflow: hidden;\r
}\r
.pb-loading {\r
  flex: 1 1;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
.pb-content .pb-scroller {\r
  padding-left: 8px;\r
}\r
.pb-content .pb-scroller ul {\r
  display: grid;\r
  grid-gap: 16px;\r
  grid-template-columns: repeat(auto-fill, minmax(248px,1fr));\r
  grid-template-rows: repeat(auto-fill, 320px);\r
}\r
.pb-card {\r
  background-color: var(--background-secondary-alt);\r
  border-radius: 8px;\r
  flex-direction: column;\r
  height: 320px;\r
  width: 100%;\r
  overflow: hidden;\r
  display: flex;\r
  position: relative;\r
}\r
.pb-card-header {\r
  height: 143px;\r
  position: relative;\r
  display: block;\r
  overflow: visible;\r
  margin-bottom: 32px;\r
}\r
.pb-card-splash {\r
  display: block;\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
}\r
.pb-card-banner {\r
  object-fit: cover;\r
  width: 100%;\r
  height: 100%;\r
  filter: blur(5px);\r
  transition: filter 250ms ease-in-out;\r
}\r
.pb-card:hover .pb-card-banner {\r
  filter: blur(0);\r
}\r
.pb-card:hover {\r
  transform: translateY(-1px);\r
  box-shadow: var(--elevation-high);\r
}\r
.pb-card-icon {\r
  border-radius: 8px;\r
  padding: 4px;\r
  background-color: var(--background-secondary-alt);\r
  position: absolute;\r
  bottom: -21px;\r
  left: 12px;\r
  width: 40px;\r
  height: 40px;\r
  display: flex;\r
}\r
.pb-card-join {\r
  position: absolute;\r
  top: 143px;\r
  right: 13px;\r
  transform: translateY(-50%);\r
  background-color: var(--background-secondary-alt);\r
  border-radius: 3px;\r
  overflow: hidden;\r
}\r
.pb-card-info {\r
  align-content: stretch;\r
  padding: 0 16px 16px;\r
  overflow: hidden;\r
  flex: 1 1 auto;\r
  position: relative;\r
  -webkit-box-orient: vertical;\r
  -webkit-box-direction: normal;\r
  display: flex;\r
  flex-direction: column;\r
}\r
.pb-card-name {\r
  color: var(--header-primary);\r
  overflow: hidden;\r
  white-space: nowrap;\r
  text-overflow: ellipsis;\r
  font-family: var(--font-display);\r
  font-weight: 600;\r
  font-size: 16px;\r
  line-height: 20px;\r
}\r
.pb-card-description {\r
  color: var(--header-secondary);\r
  flex: 1 1 auto;\r
  overflow: hidden;\r
  margin: 4px 0 16px;\r
  display: -webkit-box;\r
  -webkit-line-clamp: 4;\r
  -webkit-box-orient: vertical;\r
  -webkit-box-flex: 1;\r
  font-family: var(--font-primary);\r
  font-size: 14px;\r
  line-height: 18px;\r
  font-weight: 400;\r
  overflow: hidden scroll;\r
}\r
.pb-card-innerInfo {\r
  display: flex;\r
  align-items: center;\r
  flex: 0 0 auto;\r
}\r
.pb-card-infoItem {\r
  align-items: center;\r
  display: flex;\r
  font-size: 0.75rem;\r
  line-height: 1rem;\r
}\r
.pb-card-infoItem:not(:last-child) {\r
  margin-right: 8px;\r
}\r
.pb-card-dot {\r
  background-color: var(--primary-300);\r
  border-radius: 50%;\r
  width: 8px;\r
  height: 8px;\r
  margin-right: 4px;\r
  flex-shrink: 0;\r
}\r
.pb-card-infoValue {\r
  color: var(--header-secondary);\r
  font-family: var(--font-primary);\r
  font-size: 12px;\r
  line-height: 16px;\r
  font-weight: 400;\r
}\r
.pb-pagination {\r
  padding: 16px;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
.pb-pagination-info {\r
  font-weight: 600;\r
  color: var(--header-primary);\r
}\r
.pb-pagination-button {\r
  display: flex;\r
  background: var(--background-secondary);\r
  padding: 4px;\r
  border-radius: 4px;\r
  border: 1px solid var(--background-tertiary);\r
  color: var(--interactive-normal);\r
  cursor: pointer;\r
}\r
.pb-pagination-button:hover {\r
  color: var(--interactive-hover);\r
}\r
.pb-pagination-button:active {\r
  color: var(--interactive-active);\r
}\r
.pb-pagination-button:disabled {\r
  color: var(--interactive-muted);\r
  cursor: not-allowed;\r
  opacity: .8;\r
}\r
.pb-warning-icon {\r
  display: flex;\r
  margin-right: 4px;\r
}\r
.pb-nsfw-tag {\r
  margin-right: 8px;\r
}\r
.pb-search {\r
  margin: 0 8px;\r
}\r
.pb-no-results {\r
  height: 100%;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: center;\r
  align-items: center;\r
  text-align: center;\r
  color: var(--text-normal);\r
}\r
.pb-wrong-user {\r
  display: flex;\r
  width: 100%;\r
  flex-direction: column;\r
  justify-content: center;\r
  align-items: center;\r
}\r
.pb-wrong-user-title {\r
  font-size: xx-large;\r
  font-weight: 600;\r
  color: var(--header-primary);\r
  margin-bottom: 8px;\r
}\r
.pb-wrong-user-who {\r
  color: var(--text-normal);\r
}`;
  }
});

// shim-react:react
var require_react = __commonJS({
  "shim-react:react"(exports2) {
    var module2 = BdApi.React;
    Object.assign(exports2, module2);
    module2.default || Object.assign(exports2, { default: module2 });
  }
});

// src/Boundary/index.tsx
var import_react, ErrorBoundary, Boundary_default, init_Boundary = __esm({
  "src/Boundary/index.tsx"() {
    "use strict";
    import_react = __toESM(require_react()), ErrorBoundary = class extends import_react.Component {
      state = { didError: !1 };
      componentDidCatch() {
        this.setState({ didError: !0 });
      }
      render() {
        return this.state.didError ? this.props.fallback : this.props.children;
      }
    }, Boundary_default = ErrorBoundary;
  }
});

// src/dashboard/error.tsx
function Error2({ reload }) {
  return BdApi.React.createElement("div", { className: `${classes.wrapper} ${errorPage}` }, BdApi.React.createElement(
    Flex,
    {
      align: Flex.Align.CENTER,
      justify: Flex.Justify.CENTER,
      direction: Flex.Direction.VERTICAL,
      className: classes.flexWrapper,
      shrink: 1,
      grow: 1
    },
    BdApi.React.createElement(
      Flex.Child,
      {
        basis: "auto",
        className: classes.image,
        grow: 0,
        shrink: 1,
        wrap: !1
      }
    ),
    BdApi.React.createElement(
      Flex.Child,
      {
        basis: "auto",
        className: classes.text,
        grow: 0,
        shrink: 1,
        wrap: !1
      },
      BdApi.React.createElement("h2", { className: classes.title }, intl.Messages.UNSUPPORTED_BROWSER_TITLE),
      BdApi.React.createElement("div", { className: classes.note }, BdApi.React.createElement("div", null, BdApi.React.createElement("p", null, intl.Messages.CRASH_UNEXPECTED.replace("Discord", "Public Servers")), BdApi.React.createElement("p", null, intl.Messages.ERRORS_UNEXPECTED_CRASH.replace("Discord", "Public Servers"))))
    ),
    BdApi.React.createElement("div", { className: buttons }, BdApi.React.createElement(
      Button,
      {
        size: Button.Sizes.LARGE,
        onClick: reload
      },
      intl.Messages.ERRORS_RELOAD
    ))
  ));
}
var classes, errorPage, buttons, Flex, Button, intl, error_default, init_error = __esm({
  "src/dashboard/error.tsx"() {
    "use strict";
    classes = BdApi.Webpack.getModule((m) => m.wrapper && m.note), { errorPage, buttons } = BdApi.Webpack.getModule((m) => m.errorPage), Flex = BdApi.Webpack.getModule((m) => m.defaultProps?.basis), Button = BdApi.Webpack.getModule((m) => m.Sizes && m.BorderColors, { searchExports: !0 }), intl = BdApi.Webpack.getModule((m) => m.Messages);
    error_default = Error2;
  }
});

// src/data/joinServer.ts
async function joinGuild(code, id) {
  let guild = GuildStore.getGuild(id);
  if (guild)
    return BdApi.UI.showToast(`Going to ${guild.name}`, { icon: !0, type: "info" }), transitionTo(`/channels/${guild.id}`), 2;
  if (cachedInvites.has(code)) {
    let invite2 = cachedInvites.get(code);
    if (invite2.expires_at && new Date(invite2.expires_at).getTime() < Date.now())
      return BdApi.UI.showToast(`Invite expired '${code}'`, { icon: !0, type: "danger" }), 0;
  } else {
    BdApi.UI.showToast(`Resolving invite '${code}'`, { icon: !0, type: "info" });
    let { invite: invite2 } = await inviteActions.resolveInvite(code, "Desktop Modal");
    if (cachedInvites.set(code, invite2), !invite2)
      return BdApi.UI.showToast(`Unable to resolve invite '${code}'`, { icon: !0, type: "danger" }), 0;
    BdApi.UI.showToast(`Invite '${code}' resolved`, { icon: !0, type: "info" });
  }
  let invite = cachedInvites.get(code);
  return invite ? invite.guild.id !== id ? (BdApi.UI.showToast(`Id for '${code}' is incorrect`, { icon: !0, type: "danger" }), 0) : (InviteModalStore.isOpen = () => !0, native.minimize = () => {
  }, await dispatcher.dispatch({ type: "INVITE_MODAL_OPEN", invite }), setTimeout(() => {
    InviteModalStore.isOpen = originalIsOpen, native.minimize = originalMinimize;
  }), 1) : 0;
}
var dispatcher, inviteActions, InviteModalStore, originalIsOpen, native, originalMinimize, GuildStore, transitionTo, cachedInvites, joinServer_default, init_joinServer = __esm({
  "src/data/joinServer.ts"() {
    "use strict";
    dispatcher = BdApi.Webpack.getModule((m) => m.subscribe && m.dispatch), inviteActions = BdApi.Webpack.getModule((m) => m.resolveInvite), InviteModalStore = BdApi.Webpack.getModule((m) => m.getName?.() === "InviteModalStore"), { isOpen: originalIsOpen } = InviteModalStore, native = BdApi.Webpack.getModule((m) => m.minimize && m.requireModule), { minimize: originalMinimize } = native, GuildStore = BdApi.Webpack.getModule((m) => m.getName?.() === "GuildStore"), transitionTo = BdApi.Webpack.getModule((m) => typeof m == "function" && String(m).includes('"transitionTo - Transitioning to "'), { searchExports: !0 }), cachedInvites = /* @__PURE__ */ new Map();
    joinServer_default = joinGuild;
  }
});

// src/data/index.ts
var Store, dispatcher2, useStateFromStores, betterDiscordServer, supportServer, _sort, sort_fn, _fetchDashboard, fetchDashboard_fn, _fetchInfo, fetchInfo_fn, _cache, _loading, _authToken, _id, _featured, _popular, _keywords, Data, data_default, init_data = __esm({
  "src/data/index.ts"() {
    "use strict";
    init_joinServer();
    Store = BdApi.Webpack.getModule((m) => m.getAll && m.initialize), dispatcher2 = BdApi.Webpack.getModule((m) => m.subscribe && m.dispatch), useStateFromStores = BdApi.Webpack.getModule((m) => m.toString().includes("useStateFromStores")), betterDiscordServer = {
      name: "BetterDiscord",
      members: 14e4,
      categories: ["community", "programming", "support"],
      keywords: [],
      description: "Official BetterDiscord server for plugins, themes, support, etc",
      identifier: "86004744966914048",
      iconUrl: "https://cdn.discordapp.com/icons/86004744966914048/babd1af3fa6011a50e418a80f4970ceb.webp",
      icon: "babd1af3fa6011a50e418a80f4970ceb",
      customInvite: "BJD2yvJ",
      pinned: !0,
      insertDate: 1517806800
    }, supportServer = {
      name: "Dr.Discord",
      members: 63,
      categories: ["community", "programming", "support"],
      keywords: [],
      description: "Official Support server for this plugin and many others made by me",
      identifier: "864267123694370836",
      iconUrl: "https://cdn.discordapp.com/icons/864267123694370836/fdd9ac64197768137c2ab18651987635.webp",
      icon: "fdd9ac64197768137c2ab18651987635",
      customInvite: "yYJA3qQE5F",
      pinned: !0,
      insertDate: 1626127740
    }, Data = class extends Store {
      constructor(...args) {
        super(...args);
        __privateAdd(this, _sort);
        __privateAdd(this, _fetchDashboard);
        __privateAdd(this, _fetchInfo);
        __privateAdd(this, _cache, /* @__PURE__ */ new Map());
        __privateAdd(this, _loading, !0);
        __privateAdd(this, _authToken, null);
        __privateAdd(this, _id, null);
        __privateAdd(this, _featured, [betterDiscordServer, supportServer]);
        __privateAdd(this, _popular, []);
        __privateAdd(this, _keywords, []);
        __privateMethod(this, _fetchDashboard, fetchDashboard_fn).call(this), __privateMethod(this, _fetchInfo, fetchInfo_fn).call(this);
      }
      useState() {
        return useStateFromStores([this], () => this.getState());
      }
      getState() {
        return {
          loading: this.loading,
          authToken: this.authToken,
          featured: this.featured,
          popular: this.popular,
          keywords: this.keywords,
          id: this.id
        };
      }
      async connect() {
        await window.require("electron").ipcRenderer.invoke("bd-open-window", "https://auth.discordservers.com/connect?scopes=guilds.join&previousUrl=https://auth.discordservers.com/info", {
          windowOptions: {
            width: 520,
            height: 580,
            backgroundColor: "#282b30",
            show: !0,
            resizable: !0,
            maximizable: !1,
            minimizable: !1,
            alwaysOnTop: !0,
            frame: !1,
            center: !0,
            webPreferences: {
              nodeIntegration: !1
            }
          },
          closeOnUrl: "https://auth.discordservers.com/info"
        }), __privateMethod(this, _fetchInfo, fetchInfo_fn).call(this);
      }
      // TODO: See if theres a way to get the actual invite instead of using their join api
      async joinServer(server) {
        if (!__privateGet(this, _authToken))
          return BdApi.UI.showToast("You need to link your account first!", { type: "danger" }), !1;
        if (server.customInvite && await joinServer_default(server.customInvite, server.identifier) !== 0)
          return !0;
        try {
          return BdApi.UI.showToast("Using discordservers.com to join server", { type: "info" }), await fetch(`https://j.discordservers.com/${server.identifier}`, {
            method: "GET",
            credentials: "include",
            mode: "cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }), !0;
        } catch {
          return BdApi.UI.showToast(`Unable to join server '${server.identifier}'`, { type: "error" }), !1;
        }
      }
      async search(keyword = "", page = 1) {
        let key = JSON.stringify({ keyword, page });
        if (__privateGet(this, _cache).has(key))
          return __privateGet(this, _cache).get(key);
        let url = new URL("https://search.discordservers.com"), from = (page - 1) * 50;
        keyword && (this.keywords.includes(keyword) ? url.searchParams.append("keyword", keyword) : url.searchParams.append("term", keyword)), from && url.searchParams.append("from", from.toString());
        let data = await (await fetch(url, { method: "GET" })).json(), results = {
          servers: data.results,
          page: Math.ceil(from / 50) + 1,
          numPages: Math.ceil(data.total / 50)
        };
        return __privateGet(this, _cache).set(key, results), results;
      }
      get loading() {
        return __privateGet(this, _loading);
      }
      get authToken() {
        return __privateGet(this, _authToken);
      }
      get id() {
        return __privateGet(this, _id);
      }
      get featured() {
        return {
          servers: __privateGet(this, _featured),
          size: __privateGet(this, _featured).length,
          total: __privateGet(this, _featured).length,
          page: 1,
          numPages: 1
        };
      }
      get popular() {
        return {
          servers: __privateGet(this, _popular),
          size: __privateGet(this, _popular).length,
          total: __privateGet(this, _popular).length,
          page: 1,
          numPages: 1
        };
      }
      get keywords() {
        return __privateGet(this, _keywords);
      }
    };
    _sort = new WeakSet(), sort_fn = function(a, b) {
      return a.pinned && b.pinned ? 0 : a.pinned ? -1 : b.pinned ? 1 : a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    }, _fetchDashboard = new WeakSet(), fetchDashboard_fn = async function() {
      let data = await (await fetch("https://search.discordservers.com/dashboard")).json();
      __privateGet(this, _keywords).push(...data.mainKeywords);
      for (let result of data.results)
        result.key === "featured" && __privateGet(this, _featured).push(...result.response.hits), result.key === "popular" && __privateGet(this, _popular).push(...result.response.hits);
      __privateGet(this, _featured).sort(__privateMethod(this, _sort, sort_fn)), __privateGet(this, _popular).sort(__privateMethod(this, _sort, sort_fn)), __privateSet(this, _loading, !1), this.emitChange();
    }, _fetchInfo = new WeakSet(), fetchInfo_fn = async function() {
      let data = await (await fetch("https://auth.discordservers.com/info", {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })).text();
      if (!data) {
        __privateSet(this, _authToken, null), __privateSet(this, _id, null), this.emitChange();
        return;
      }
      let requestData = JSON.parse(data);
      __privateGet(this, _authToken) !== requestData.access_token && (__privateSet(this, _authToken, requestData.access_token), __privateSet(this, _id, requestData.id), this.emitChange());
    }, _cache = new WeakMap(), _loading = new WeakMap(), _authToken = new WeakMap(), _id = new WeakMap(), _featured = new WeakMap(), _popular = new WeakMap(), _keywords = new WeakMap(), __publicField(Data, "displayName", "public-servers-data");
    data_default = new Data(dispatcher2, {});
  }
});

// src/dashboard/card.tsx
function makeURL(server, animate) {
  if (server.icon)
    return animate && server.icon.startsWith("a_") ? `https://cdn.discordapp.com/icons/${server.identifier}/${server.icon}.gif` : `https://cdn.discordapp.com/icons/${server.identifier}/${server.icon}.png`;
}
function Card(server) {
  let state = data_default.useState(), joinedGuild = useStateFromStores2([GuildStore2], () => server.identifier in GuildStore2.getGuilds()), currentUser = useStateFromStores2([UserStore], () => UserStore.getCurrentUser()), [hovering, setHovering] = (0, import_react2.useState)(!1), formattedDate = (0, import_react2.useMemo)(() => dateFormatter.format(new Date(server.insertDate * 1e3)), []), members = (0, import_react2.useMemo)(() => numberFormatter.format(server.members), []), [joining, setJoining] = (0, import_react2.useState)(!1), defaultIcon = (0, import_react2.useMemo)(() => DEFAULT_AVATARS[Math.floor(Math.random() * DEFAULT_AVATARS.length)], []), icon = (0, import_react2.useMemo)(() => makeURL(server, hovering), [hovering]), [error, setError] = (0, import_react2.useState)(!icon), isNsfw = (0, import_react2.useMemo)(() => nsfwKeywords.has(server.mainKeyword) || server.keywords.some((keyword) => nsfwKeywords.has(keyword.toLowerCase())), []), canJoin = (0, import_react2.useMemo)(() => state.authToken ? isNsfw ? currentUser.nsfwAllowed : !0 : !1, [currentUser, state]);
  return BdApi.React.createElement("li", { className: "pb-card", "data-nsfw": isNsfw, onMouseOver: () => setHovering(!0), onMouseLeave: () => setHovering(!1) }, BdApi.React.createElement("div", { className: "pb-card-header" }, BdApi.React.createElement("div", { className: "pb-card-splash" }, BdApi.React.createElement("img", { className: "pb-card-banner", src: error ? defaultIcon : server.iconUrl, alt: server.name, onError: () => setError(!0) })), BdApi.React.createElement("img", { className: "pb-card-icon", src: error ? defaultIcon : icon, alt: server.name, width: 40, height: 40 })), BdApi.React.createElement("div", { className: "pb-card-join" }, BdApi.React.createElement(
    Button2,
    {
      size: Button2.Sizes.SMALL,
      disabled: !canJoin || joinedGuild || joining,
      onClick: async () => {
        setJoining(!0), await data_default.joinServer(server), setJoining(!1);
      }
    },
    joinedGuild ? intl2.Messages.JOINED_GUILD : joining ? intl2.Messages.JOINING_GUILD : canJoin ? intl2.Messages.JOIN_GUILD : "Cannot Join"
  )), BdApi.React.createElement("div", { className: "pb-card-info" }, BdApi.React.createElement("div", { className: "pb-card-name" }, isNsfw && BdApi.React.createElement(
    Tooltip,
    {
      hideOnClick: !1,
      text: "NSFW"
    },
    (props) => BdApi.React.createElement("span", { ...props, className: "pb-nsfw-tag" }, BdApi.React.createElement(Warning, { width: 14, height: 14, color: "var(--info-danger-foreground)" }))
  ), server.name), BdApi.React.createElement("div", { className: `pb-card-description ${scollerClasses.thin} ${scollerClasses.fade}` }, server.description), BdApi.React.createElement("div", { className: "pb-card-innerInfo" }, BdApi.React.createElement("div", { className: "pb-card-infoItem" }, BdApi.React.createElement("div", { className: "pb-card-dot" }), BdApi.React.createElement("div", { className: "pb-card-infoValue" }, members, " ", intl2.Messages.MEMBERS)), BdApi.React.createElement("div", { className: "pb-card-infoItem" }, BdApi.React.createElement("div", { className: "pb-card-dot" }), BdApi.React.createElement("div", { className: "pb-card-infoValue" }, formattedDate)))));
}
var import_react2, Button2, Warning, Tooltip, GuildStore2, UserStore, useStateFromStores2, scollerClasses, DEFAULT_AVATARS, intl2, dateFormatter, numberFormatter, nsfwKeywords, card_default, init_card = __esm({
  "src/dashboard/card.tsx"() {
    "use strict";
    import_react2 = __toESM(require_react());
    init_data();
    Button2 = BdApi.Webpack.getModule((m) => m.Sizes && m.BorderColors, { searchExports: !0 }), Warning = BdApi.Webpack.getModule((m) => m.toString?.().includes("11.25 14C11.25 14.691 10.69 15.25 10 15.25Z")), Tooltip = BdApi.Components.Tooltip, GuildStore2 = BdApi.Webpack.getModule((m) => m.getName?.() === "GuildStore"), UserStore = BdApi.Webpack.getModule((m) => m.getName?.() === "UserStore"), useStateFromStores2 = BdApi.Webpack.getModule((m) => m.toString().includes("useStateFromStores")), scollerClasses = BdApi.Webpack.getModule((m) => m.scrollerBase && m.customTheme), { DEFAULT_AVATARS } = BdApi.Webpack.getModule((m) => m.DEFAULT_AVATARS), intl2 = BdApi.Webpack.getModule((m) => m.Messages), dateFormatter = new Intl.DateTimeFormat(), numberFormatter = new Intl.NumberFormat(), nsfwKeywords = /* @__PURE__ */ new Set([
      "nsfw"
    ]);
    card_default = Card;
  }
});

// src/dashboard/content.tsx
function Content({ searchResults }) {
  return BdApi.React.createElement("div", { className: `pb-scroller ${scollerClasses2.auto}` }, BdApi.React.createElement("ul", null, searchResults.servers.map((server) => BdApi.React.createElement(card_default, { ...server, key: `publicServers-card-${server.identifier}` }))));
}
var scollerClasses2, content_default, init_content = __esm({
  "src/dashboard/content.tsx"() {
    "use strict";
    init_card();
    scollerClasses2 = BdApi.Webpack.getModule((m) => m.scrollerBase && m.customTheme);
    content_default = Content;
  }
});

// src/dashboard/loading.tsx
function Loading() {
  return BdApi.React.createElement("div", { className: "pb-loading" }, BdApi.React.createElement(Spinner, { type: Spinner.Type.WANDERING_CUBES, className: "pb-spinner" }));
}
var Spinner, loading_default, init_loading = __esm({
  "src/dashboard/loading.tsx"() {
    "use strict";
    Spinner = BdApi.Webpack.getModule((m) => m.Type?.PULSING_ELLIPSIS, { searchExports: !0 });
    loading_default = Loading;
  }
});

// src/dashboard/categories.tsx
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => `${txt.charAt(0).toUpperCase()}${txt.substr(1).toLowerCase()}`
  );
}
function KeyWordButton({ selected, route, text }) {
  return BdApi.React.createElement(
    "li",
    {
      onClick: () => !selected && transitionTo2(route),
      className: `pb-button${selected ? " pb-selected" : ""}`
    },
    text
  );
}
function Categories({ category }) {
  let { keywords } = data_default.useState();
  return BdApi.React.createElement("div", { className: "pb-categories" }, BdApi.React.createElement("div", { className: `pb-scroller ${scollerClasses3.thin} ${scollerClasses3.fade}` }, BdApi.React.createElement("ul", null, BdApi.React.createElement(
    KeyWordButton,
    {
      key: "/publicServers/all",
      selected: category === "all",
      route: "/publicServers/all",
      text: toTitleCase("all")
    }
  ), BdApi.React.createElement(
    KeyWordButton,
    {
      key: "/publicServers/featured",
      selected: category === "featured",
      route: "/publicServers/featured",
      text: toTitleCase("featured")
    }
  ), BdApi.React.createElement(
    KeyWordButton,
    {
      key: "/publicServers/popular",
      selected: category === "popular",
      route: "/publicServers/popular",
      text: toTitleCase("popular")
    }
  ), BdApi.React.createElement("li", { className: "pb-seperator" }), keywords.map((keyword) => BdApi.React.createElement(
    KeyWordButton,
    {
      key: `/publicServers/${keyword}`,
      selected: category === keyword,
      route: `/publicServers/${keyword}`,
      text: toTitleCase(keyword)
    }
  )))));
}
var scollerClasses3, transitionTo2, categories_default, init_categories = __esm({
  "src/dashboard/categories.tsx"() {
    "use strict";
    init_data();
    scollerClasses3 = BdApi.Webpack.getModule((m) => m.scrollerBase && m.customTheme), transitionTo2 = BdApi.Webpack.getModule((m) => typeof m == "function" && String(m).includes('"transitionTo - Transitioning to "'), { searchExports: !0 });
    categories_default = Categories;
  }
});

// src/dashboard/pagination.tsx
function Pagination({ searchResults, page }) {
  return BdApi.React.createElement("div", { className: "pb-pagination" }, BdApi.React.createElement(
    "button",
    {
      className: "pb-pagination-button",
      onClick: () => page.set(page.number - 1),
      disabled: !(1 - page.number)
    },
    BdApi.React.createElement(Back, { width: 18, height: 18 })
  ), BdApi.React.createElement("span", { className: "pb-pagination-info" }, intl3.Messages.PAGINATION_PAGE_OF.intlMessage.format({
    page: ~(searchResults.numPages - searchResults.page) >= 0 ? 0 : searchResults.page,
    totalPages: Number.isNaN(searchResults.numPages) ? intl3.Messages.STATUS_UNKNOWN : searchResults.numPages
  })), BdApi.React.createElement(
    "button",
    {
      className: "pb-pagination-button",
      onClick: () => page.set(page.number + 1),
      disabled: searchResults.numPages ? !(searchResults.numPages - page.number) : !0
    },
    BdApi.React.createElement(Forward, { width: 18, height: 18 })
  ));
}
var Back, Forward, intl3, pagination_default, init_pagination = __esm({
  "src/dashboard/pagination.tsx"() {
    "use strict";
    Back = BdApi.Webpack.getModule((m) => m.toString?.().includes("18.35 4.35 16 2 6 12 16 22 18.35 19.65 10.717 12")), Forward = BdApi.Webpack.getModule((m) => m.toString?.().includes("8.47 2 6.12 4.35 13.753 12 6.12 19.65 8.47 22 18.47 12")), intl3 = BdApi.Webpack.getModule((m) => m.Messages);
    pagination_default = Pagination;
  }
});

// src/dashboard/search.tsx
function Search({ category, loading }) {
  let state = data_default.useState(), [query, setQuery] = (0, import_react3.useState)(() => state.keywords.concat("all", "featured", "popular").includes(category) ? "" : decodeURIComponent(category));
  return (0, import_react3.useLayoutEffect)(() => {
    category !== encodeURIComponent(query) && setQuery("");
  }, [category]), BdApi.React.createElement(
    SearchBar,
    {
      query,
      isLoading: loading,
      disabled: !1,
      autoFocus: !1,
      size: SearchBar.Sizes.SMALL,
      className: "pb-search",
      onChange: (val) => setQuery(val),
      onClear: () => {
        query && (setQuery(""), transitionTo3("/publicServers/all/1"));
      },
      onKeyDown: (event) => {
        event.key.toLowerCase() === "enter" && transitionTo3(`/publicServers/${encodeURIComponent(query)}/1`);
      }
    }
  );
}
var import_react3, SearchBar, transitionTo3, search_default, init_search = __esm({
  "src/dashboard/search.tsx"() {
    "use strict";
    import_react3 = __toESM(require_react());
    init_data();
    SearchBar = BdApi.Webpack.getModule((m) => m.Sizes?.SMALL && m.defaultProps.isLoading === !1), transitionTo3 = BdApi.Webpack.getModule((m) => typeof m == "function" && String(m).includes('"transitionTo - Transitioning to "'), { searchExports: !0 });
    search_default = Search;
  }
});

// src/dashboard/noResults.tsx
function NoResults() {
  let showAlt = (0, import_react4.useMemo)(() => Math.round(Math.random() * 10) === 5, []);
  return BdApi.React.createElement("div", { className: "pb-no-results" }, BdApi.React.createElement("div", { className: `${noResultsImage}${showAlt ? ` ${alt}` : ""}` }), BdApi.React.createElement("div", { className: `${emptyResultsText} ${noResults}` }, showAlt ? intl4.Messages.SEARCH_NO_RESULTS_ALT : intl4.Messages.SEARCH_NO_RESULTS));
}
var import_react4, noResultsImage, alt, emptyResultsText, noResults, intl4, noResults_default, init_noResults = __esm({
  "src/dashboard/noResults.tsx"() {
    "use strict";
    import_react4 = __toESM(require_react()), { noResultsImage, alt, emptyResultsText, noResults } = BdApi.Webpack.getModule((m) => m.noResultsImage && m.errorImage), intl4 = BdApi.Webpack.getModule((m) => m.Messages);
    noResults_default = NoResults;
  }
});

// src/dashboard/wrongUser.tsx
function WrongUser() {
  let state = data_default.useState(), user = useStateFromStores3([UserStore2], () => UserStore2.getUser(state.id));
  return BdApi.React.createElement("div", { className: "pb-wrong-user" }, BdApi.React.createElement("h2", { className: "pb-wrong-user-title" }, "Wrong User"), BdApi.React.createElement("div", { className: "pb-wrong-user-who" }, "Login into '", BdApi.React.createElement("span", null, user ? user.tag : state.id), "'"));
}
var UserStore2, useStateFromStores3, wrongUser_default, init_wrongUser = __esm({
  "src/dashboard/wrongUser.tsx"() {
    "use strict";
    init_data();
    UserStore2 = BdApi.Webpack.getModule((m) => m.getName?.() === "UserStore"), useStateFromStores3 = BdApi.Webpack.getModule((m) => m.toString().includes("useStateFromStores"));
    wrongUser_default = WrongUser;
  }
});

// src/dashboard/page.tsx
function getRoute(path, ...args) {
  let count = -1;
  return path.replace(/:[a-zA-Z?]+/g, function(match) {
    return count += 1, args[count] !== void 0 ? args[count] : match;
  });
}
function Page(props) {
  let currentUser = useStateFromStores4([UserStore3], () => UserStore3.getCurrentUser()), state = data_default.useState(), [searchResults, setSearchResults] = (0, import_react5.useState)(null), [loading, setLoading] = (0, import_react5.useState)(!0), page = (0, import_react5.useMemo)(() => Number(props.match.params.page), [props.match.params.page]), setPage = (0, import_react5.useCallback)((page2) => {
    transitionTo4(getRoute("/publicServers/:category/:page", props.match.params.category, page2.toString()));
  }, [page, props.match.params.category]), [numPages, setNumPages] = (0, import_react5.useState)(NaN);
  (0, import_react5.useLayoutEffect)(() => () => setNumPages(NaN), [props.match.params.category]), (0, import_react5.useLayoutEffect)(() => () => setLoading(!0), [props.match.params.category, page]), (0, import_react5.useLayoutEffect)(() => {
    if (page <= 0)
      return setPage(1);
    Number.isNaN(numPages) || numPages - page < 0 && setPage(numPages);
  }, [page, numPages]), (0, import_react5.useLayoutEffect)(() => {
    let abortController = new AbortController(), { category } = props.match.params;
    if (category === "featured" || category === "popular") {
      setSearchResults(data_default[category]), setLoading(!1), setNumPages(1);
      return;
    }
    let keyword = category === "all" ? "" : category;
    return data_default.search(keyword, page).then((res) => {
      abortController.signal.aborted || (setSearchResults(res), setLoading(!1), setNumPages(res.numPages));
    }), () => abortController.abort();
  }, [props.match.params.category, page]);
  let wrongUser = (0, import_react5.useMemo)(() => state.id ? currentUser.id !== state.id : !1, [currentUser, state]);
  return BdApi.React.createElement("main", { className: container }, BdApi.React.createElement(
    Headerbar,
    {
      hideSearch: !1,
      transparent: !1,
      toolbar: [
        BdApi.React.createElement(
          search_default,
          {
            category: props.match.params.category,
            loading
          }
        ),
        BdApi.React.createElement(
          Headerbar.Icon,
          {
            icon: Link,
            onClick: () => data_default.connect(),
            disabled: state.authToken,
            tooltip: state.authToken ? "Connected" : "Connect"
          }
        )
      ],
      mobileToolbar: []
    },
    BdApi.React.createElement(Headerbar.Icon, { icon: Globe }),
    BdApi.React.createElement(Headerbar.Title, { level: 1 }, "Public Servers")
  ), BdApi.React.createElement("div", { className: tabBody }, state.loading ? BdApi.React.createElement(loading_default, null) : wrongUser ? BdApi.React.createElement(wrongUser_default, null) : BdApi.React.createElement(import_react5.default.Fragment, null, BdApi.React.createElement("div", { className: "pb-content" }, BdApi.React.createElement(pagination_default, { searchResults: { numPages, page }, page: { number: page, set: setPage } }), loading ? BdApi.React.createElement(loading_default, null) : searchResults.servers.length ? BdApi.React.createElement(content_default, { searchResults }) : BdApi.React.createElement(noResults_default, null)), BdApi.React.createElement(categories_default, { category: props.match.params.category }))));
}
var import_react5, Headerbar, Globe, Link, transitionTo4, container, tabBody, UserStore3, useStateFromStores4, page_default, init_page = __esm({
  "src/dashboard/page.tsx"() {
    "use strict";
    import_react5 = __toESM(require_react());
    init_data();
    init_content();
    init_loading();
    init_categories();
    init_pagination();
    init_search();
    init_noResults();
    init_wrongUser();
    Headerbar = BdApi.Webpack.getModule((m) => m.Title && m.Icon), Globe = BdApi.Webpack.getModule((m) => m.toString?.().includes("16H15V13C15 12.45 14.55")), Link = BdApi.Webpack.getModule((m) => m.toString?.().includes("4.24 0l3.53-3.53a2.982")), transitionTo4 = BdApi.Webpack.getModule((m) => typeof m == "function" && String(m).includes('"transitionTo - Transitioning to "'), { searchExports: !0 }), { container, tabBody } = BdApi.Webpack.getModule((m) => m.container && m.tabBody), UserStore3 = BdApi.Webpack.getModule((m) => m.getName?.() === "UserStore"), useStateFromStores4 = BdApi.Webpack.getModule((m) => m.toString().includes("useStateFromStores"));
    page_default = (0, import_react5.memo)(Page);
  }
});

// src/dashboard/index.tsx
function Dashboard(props) {
  let listener = (0, import_react6.useCallback)((event) => {
    if (!(event.key === "r" && (event.ctrlKey || event.metaKey)))
      return;
    let url = new URL("/channels/@me", location.origin);
    url.searchParams.append("publicServers", location.pathname);
    let pathname = url.href.replace(url.origin, "");
    props.history.push(pathname);
  }, []);
  (0, import_react6.useLayoutEffect)(() => (document.addEventListener("keydown", listener), () => document.removeEventListener("keydown", listener)), [listener]);
  let reload = (0, import_react6.useCallback)(() => {
    listener({ key: "r", ctrlKey: !0 }), location.reload();
  }, []);
  return BdApi.React.createElement(Boundary_default, { fallback: BdApi.React.createElement(error_default, { reload }) }, BdApi.React.createElement(page_default, { ...props }));
}
var import_react6, dashboard_default, init_dashboard = __esm({
  "src/dashboard/index.tsx"() {
    "use strict";
    import_react6 = __toESM(require_react());
    init_Boundary();
    init_error();
    init_page();
    dashboard_default = Dashboard;
  }
});

// src/patches/container.tsx
function Navigate(props) {
  return (0, import_react7.useLayoutEffect)(() => {
    let page = props.match.params.page ?? "1", category = props.match.params.category ?? "featured";
    props.history.push(`/publicServers/${category}/${page}`);
  }, []), BdApi.React.createElement(import_react7.default.Fragment, null);
}
function NewType() {
  let result = type({}), { children } = BdApi.Utils.findInTree(result, (node) => node && node.children?.length > 5, { walkable: ["children", "props"] });
  return children.push(
    BdApi.React.createElement(
      Route,
      {
        disableTrack: !0,
        exact: !0,
        render: (props) => BdApi.React.createElement(Navigate, { ...props }),
        path: "/publicServers/"
      }
    ),
    BdApi.React.createElement(
      Route,
      {
        disableTrack: !0,
        exact: !0,
        render: (props) => BdApi.React.createElement(Navigate, { ...props }),
        path: "/publicServers/:category"
      }
    ),
    BdApi.React.createElement(
      Route,
      {
        disableTrack: !0,
        exact: !0,
        render: (props) => BdApi.React.createElement(dashboard_default, { ...props }),
        path: "/publicServers/:category/:page"
      }
    )
  ), result;
}
var import_react7, Route, container2, inst, type, container_default, init_container = __esm({
  "src/patches/container.tsx"() {
    "use strict";
    import_react7 = __toESM(require_react());
    init_dashboard();
    Route = BdApi.Webpack.getModule((m) => m.toString?.().includes(".impressionProperties,")), { container: container2 } = BdApi.Webpack.getModule((m) => m.container && m.fullWidth), inst = BdApi.ReactUtils.getOwnerInstance(document.querySelector(`.${container2}`));
    container_default = new class {
      undo() {
      }
      patch() {
        this.undo = BdApi.Patcher.after("publicServers", inst, "render", (that, args, res) => {
          type || (type = res.props.children.type), res.props.children = BdApi.React.createElement(NewType, null);
        }), inst.forceUpdate();
      }
      unpatch() {
        this.undo(), inst.forceUpdate();
      }
    }();
  }
});

// src/navigatorButton/index.tsx
function NavigatorButton({ isSelected }) {
  let state = data_default.useState();
  return BdApi.React.createElement(
    Boundary_default,
    {
      fallback: BdApi.React.createElement("div", { onClick: () => transitionTo5("/publicServers") }, "Public Servers")
    },
    BdApi.React.createElement(
      LinkButton,
      {
        selected: isSelected,
        route: "/publicServers",
        icon: Globe2,
        text: "Public Servers"
      },
      !state.authToken && BdApi.React.createElement(
        Tooltip2,
        {
          hideOnClick: !1,
          text: "Account not connected"
        },
        (props) => BdApi.React.createElement("div", { ...props, className: "pb-warning-icon" }, BdApi.React.createElement(Warning2, { width: 20, height: 20, color: "var(--info-warning-foreground)" }))
      )
    )
  );
}
var LinkButton, Globe2, Warning2, transitionTo5, Tooltip2, navigatorButton_default, init_navigatorButton = __esm({
  "src/navigatorButton/index.tsx"() {
    "use strict";
    init_Boundary();
    init_data();
    LinkButton = BdApi.Webpack.getModule((m) => m.prototype?.render?.toString().includes(".linkButtonIcon"), { searchExports: !0 }), Globe2 = BdApi.Webpack.getModule((m) => m.toString?.().includes("16H15V13C15 12.45 14.55")), Warning2 = BdApi.Webpack.getModule((m) => m.toString?.().includes("11.25 14C11.25 14.691 10.69 15.25 10 15.25Z")), transitionTo5 = BdApi.Webpack.getModule((m) => typeof m == "function" && String(m).includes('"transitionTo - Transitioning to "'), { searchExports: !0 }), Tooltip2 = BdApi.Components.Tooltip;
    navigatorButton_default = NavigatorButton;
  }
});

// src/patches/sidebar.tsx
var dmSidebar, sidebar_default, init_sidebar = __esm({
  "src/patches/sidebar.tsx"() {
    "use strict";
    init_navigatorButton();
    dmSidebar = BdApi.Webpack.getModule((m) => m.Z?.toString?.().includes(".showDMHeader,")), sidebar_default = new class {
      undo() {
      }
      patch() {
        this.undo = BdApi.Patcher.after("publicServers", dmSidebar, "Z", (that, args, res) => {
          let isSelected = location.pathname.startsWith("/publicServers");
          for (let child of res.props.children.props.children)
            child && child.props.selected && (child.props.selected = !isSelected);
          res.props.children.props.children.find((button) => button?.key === "publicServers_linkButton") || res.props.children.props.children.push(
            BdApi.React.createElement(navigatorButton_default, { isSelected, key: "publicServers_linkButton" })
          );
        });
      }
      unpatch() {
        this.undo();
      }
    }();
  }
});

// src/patches/views.ts
var app, View, views_default, init_views = __esm({
  "src/patches/views.ts"() {
    "use strict";
    ({ app } = BdApi.Webpack.getModule((m) => m.app && m.layers)), View = BdApi.Utils.findInTree(
      BdApi.ReactUtils.getInternalInstance(document.querySelector(`.${app}`)),
      (node) => node.memoizedProps?.children?.length === 3,
      { walkable: ["return"] }
    ), views_default = new class {
      undo() {
      }
      patch() {
        this.undo = BdApi.Patcher.after("publicServers", View.stateNode, "render", (that) => {
          let view = BdApi.Utils.findInTree(that.props, (node) => node?.props?.path?.length > 5, { walkable: ["children", "props"] });
          view && (view.props.path.push("/publicServers/"), view.props.path.push("/publicServers/:category"), view.props.path.push("/publicServers/:category/:page"), view.props.path = Array.from(new Set(view.props.path)));
        }), View.stateNode.forceUpdate();
      }
      unpatch() {
        this.undo(), View.stateNode.forceUpdate();
      }
    }();
  }
});

// src/patches/index.ts
function patch() {
  container_default.patch(), sidebar_default.patch(), views_default.patch();
}
function unpatch() {
  container_default.unpatch(), sidebar_default.unpatch(), views_default.unpatch();
}
var init_patches = __esm({
  "src/patches/index.ts"() {
    "use strict";
    init_container();
    init_sidebar();
    init_views();
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
var transitionTo6, PublicServers, src_default, init_src = __esm({
  "src/index.ts"() {
    "use strict";
    init_styles();
    init_patches();
    transitionTo6 = BdApi.Webpack.getModule((m) => typeof m == "function" && String(m).includes('"transitionTo - Transitioning to "'), { searchExports: !0 }), PublicServers = class {
      start() {
        patch(), BdApi.DOM.addStyle("PublicServers", styles_default);
        let pathname = new URL(location.href).searchParams.get("publicServers");
        if (pathname)
          return transitionTo6(pathname);
      }
      stop() {
        if (BdApi.DOM.removeStyle("PublicServers"), unpatch(), !location.pathname.startsWith("/publicServers"))
          return;
        let url = new URL("/channels/@me", location.origin);
        url.searchParams.append("publicServers", location.pathname);
        let pathname = url.href.replace(url.origin, "");
        transitionTo6(pathname);
      }
    }, src_default = PublicServers;
  }
});

// index.js
module.exports = (init_src(), __toCommonJS(src_exports));
