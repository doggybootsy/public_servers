import React from "react";

import { type searchResult } from "../data";

const Back = BdApi.Webpack.getModule(m => m.toString?.().includes("18.35 4.35 16 2 6 12 16 22 18.35 19.65 10.717 12"));
const Forward = BdApi.Webpack.getModule(m => m.toString?.().includes("8.47 2 6.12 4.35 13.753 12 6.12 19.65 8.47 22 18.47 12"));
const intl = BdApi.Webpack.getModule(m => m.Messages);

function Pagination({ searchResults, page }: { searchResults: searchResult, page: { set: (page: number) => void, number: number } }) {   
  return (
    <div className="pb-pagination">
      <button 
        className="pb-pagination-button" 
        onClick={() => page.set(page.number - 1)} 
        disabled={!(1 - page.number)}
      ><Back width={18} height={18} /></button>
      <span className="pb-pagination-info">
        {intl.Messages.PAGINATION_PAGE_OF.intlMessage.format({ 
          page: ~(searchResults.numPages - searchResults.page) >= 0 ? 0 : searchResults.page, 
          totalPages: Number.isNaN(searchResults.numPages) ? intl.Messages.STATUS_UNKNOWN : searchResults.numPages 
        })}
      </span>
      <button 
        className="pb-pagination-button" 
        onClick={() => page.set(page.number + 1)} 
        disabled={searchResults.numPages ? !(searchResults.numPages - page.number) : true}
      ><Forward width={18} height={18} /></button>
    </div>
  );
};

export default Pagination;