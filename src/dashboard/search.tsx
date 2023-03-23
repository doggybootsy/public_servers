import React, { useLayoutEffect, useState } from "react";
import data from "../data";

const SearchBar = BdApi.Webpack.getModule(m => m.Sizes?.SMALL && m.defaultProps.isLoading === false);
const transitionTo = BdApi.Webpack.getModule((m) => typeof m === "function" && String(m).includes(`"transitionTo - Transitioning to "`), { searchExports: true }) as (pathname: string) => void;

function Search({ category, loading }: { category: string, loading: boolean }) {
  const state = data.useState();

  const [ query, setQuery ] = useState(() => state.keywords.concat("all", "featured", "popular").includes(category) ? "" : decodeURIComponent(category));

  useLayoutEffect(() => {
    if (category === encodeURIComponent(query)) return;
    setQuery("");
  }, [ category ]);

  return (
    <SearchBar 
      query={query}
      isLoading={loading}
      disabled={false}
      autoFocus={false}
      size={SearchBar.Sizes.SMALL}
      className="pb-search"
      onChange={(val: string) => setQuery(val)}
      onClear={() => {
        if (!query) return;
        setQuery("");
        transitionTo("/publicServers/all/1")
      }}
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.key.toLowerCase() !== "enter") return;
        transitionTo(`/publicServers/${encodeURIComponent(query)}/1`);
      }}
    />
  );
};

export default Search;