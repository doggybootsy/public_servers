import type { Plugin } from "betterdiscord";

import css from "./styles.css";
import * as patches from "./patches";

const transitionTo = BdApi.Webpack.getModule((m) => typeof m === "function" && String(m).includes(`"transitionTo - Transitioning to "`), { searchExports: true }) as (pathname: string) => void;

class PublicServers implements Plugin {
  start(): void {
    patches.patch();
    BdApi.DOM.addStyle("PublicServers", css);
    
    const url = new URL(location.href);
    const pathname = url.searchParams.get("publicServers");
    if (pathname) return transitionTo(pathname);
  };
  stop(): void {
    BdApi.DOM.removeStyle("PublicServers");
    patches.unpatch();
    
    if (!location.pathname.startsWith("/publicServers")) return;

    const url = new URL("/channels/@me", location.origin);
    url.searchParams.append("publicServers", location.pathname);
    const pathname = url.href.replace(url.origin, "");
    transitionTo(pathname);
  };
};

export default PublicServers;