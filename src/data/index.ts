import joinGuild from "./joinServer";

const Store = BdApi.Webpack.getModule(m => m.getAll && m.initialize);
const dispatcher = BdApi.Webpack.getModule(m => m.subscribe && m.dispatch);
const useStateFromStores = BdApi.Webpack.getModule(m => m.toString().includes("useStateFromStores"));

const betterDiscordServer = {
  name: "BetterDiscord",
  members: 140000,
  categories: [ "community", "programming", "support" ],
  keywords: [ ],
  description: "Official BetterDiscord server for plugins, themes, support, etc",
  identifier: "86004744966914048",
  iconUrl: "https://cdn.discordapp.com/icons/86004744966914048/babd1af3fa6011a50e418a80f4970ceb.webp",
  icon: "babd1af3fa6011a50e418a80f4970ceb",
  customInvite: "BJD2yvJ",
  pinned: true,
  insertDate: 1517806800
};
const supportServer = {
  name: "Dr.Discord",
  members: 63,
  categories: [ "community", "programming", "support" ],
  keywords: [ ],
  description: "Official Support server for this plugin and many others made by me",
  identifier: "864267123694370836",
  iconUrl: "https://cdn.discordapp.com/icons/864267123694370836/fdd9ac64197768137c2ab18651987635.webp",
  icon: "fdd9ac64197768137c2ab18651987635",
  customInvite: "yYJA3qQE5F",
  pinned: true,
  insertDate: 1626127740
};

export type searchResult = {
  numPages: number,
  page: number,
  servers: server[]
};

export type server = typeof betterDiscordServer;

class Data extends Store {
  static displayName = "public-servers-data";

  constructor(...args: any[]) {
    super(...args);
    this.#fetchDashboard();
    this.#fetchInfo();
  };

  #sort(a: server, b: server) {
    if (a.pinned && b.pinned) return 0;
    if (a.pinned) return -1;
    if (b.pinned) return 1;
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  };

  async #fetchDashboard() {
    const request = await fetch("https://search.discordservers.com/dashboard");
    const data = await request.json();

    this.#keywords.push(...data.mainKeywords);

    for (const result of data.results) {
      if (result.key === "featured") this.#featured.push(...result.response.hits);
      if (result.key === "popular") this.#popular.push(...result.response.hits);
    };

    this.#featured.sort(this.#sort);
    this.#popular.sort(this.#sort);

    this.#loading = false;
    this.emitChange();
  };
  async #fetchInfo() {
    const request = await fetch("https://auth.discordservers.com/info", {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await request.text();
    if (!data) {
      this.#authToken = null;
      this.#id = null;
      this.emitChange();
      return;
    };    

    const requestData = JSON.parse(data);
    if (this.#authToken === requestData.access_token) return;
    
    this.#authToken = requestData.access_token;
    this.#id = requestData.id;

    this.emitChange();
  };

  useState(): ReturnType<Data["getState"]> {
    return useStateFromStores([ this ], () => this.getState());
  };
  getState() {
    return {
      loading: this.loading,
      authToken: this.authToken,
      featured: this.featured,
      popular: this.popular,
      keywords: this.keywords,
      id: this.id
    };
  };

  async connect() {
    // TODO: Find a way that doesnt need this | Use my own components
    const electron = (window as any).require("electron");

    await electron.ipcRenderer.invoke("bd-open-window", "https://auth.discordservers.com/connect?scopes=guilds.join&previousUrl=https://auth.discordservers.com/info", {
      windowOptions: {
        width: 520,
        height: 580,
        backgroundColor: "#282b30",
        show: true,
        resizable: true,
        maximizable: false,
        minimizable: false,
        alwaysOnTop: true,
        frame: false,
        center: true,
        webPreferences: {
          nodeIntegration: false
        }
      },
      closeOnUrl: "https://auth.discordservers.com/info"
    });

    this.#fetchInfo();
  };

  // TODO: See if theres a way to get the actual invite instead of using their join api
  async joinServer(server: server) {
    if (!this.#authToken) {
      BdApi.UI.showToast("You need to link your account first!", { type: "danger" });
      return false;
    };
    if (server.customInvite) {
      const data = await joinGuild(server.customInvite, server.identifier);
      if (data !== 0) return true; 
    }

    try {
      BdApi.UI.showToast("Using discordservers.com to join server", { type: "info" });

      await fetch(`https://j.discordservers.com/${server.identifier}`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      return true;
    } catch (error) {
      BdApi.UI.showToast(`Unable to join server '${server.identifier}'`, { type: "error" });
      return false;
    }
  };
  
  #cache = new Map<string, searchResult>();

  async search(keyword: string = "", page: number = 1): Promise<searchResult> {
    const key = JSON.stringify({ keyword, page });
    
    if (this.#cache.has(key)) return this.#cache.get(key)!;

    const url = new URL("https://search.discordservers.com");

    const from = (page - 1) * 50;
    
    if (keyword) {
      // If keyword search using keyword if not search using term
      if (this.keywords.includes(keyword)) url.searchParams.append("keyword", keyword);
      else url.searchParams.append("term", keyword);
    }
    if (from) url.searchParams.append("from", from.toString());

    const request = await fetch(url, { method: "GET" });
    const data = await request.json();

    const results = {
      servers: data.results,
      page: Math.ceil(from / 50) + 1,
      numPages: Math.ceil(data.total / 50)
    };

    this.#cache.set(key, results);
    return results;
  };

  #loading = true;
  get loading() { return this.#loading; };

  #authToken: null | string = null;
  get authToken() { return this.#authToken; };
  #id: null | string = null;
  get id() { return this.#id; };

  #featured = [ betterDiscordServer, supportServer ];
  get featured() { 
    return {
      servers: this.#featured,
      size: this.#featured.length,
      total: this.#featured.length,
      page: 1,
      numPages: 1
    };
  };
  #popular: server[] = [ ];
  get popular() { 
    return {
      servers: this.#popular,
      size: this.#popular.length,
      total: this.#popular.length,
      page: 1,
      numPages: 1
    };
  };
  #keywords: string[] = [ ];
  get keywords() { return this.#keywords; };
};

export default new Data(dispatcher, {});