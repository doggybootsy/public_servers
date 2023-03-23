import React from "react";

import { type searchResult } from "../data";
import Card from "./card";

const scollerClasses = BdApi.Webpack.getModule(m => m.scrollerBase && m.customTheme);

function Content({ searchResults }: { searchResults: searchResult }) { 
  return (
    <div className={`pb-scroller ${scollerClasses.auto}`}>
      <ul>
        {searchResults.servers.map(server => (
          <Card {...server} key={`publicServers-card-${server.identifier}`} />
        ))}
      </ul>
    </div>
  );
};

export default Content;