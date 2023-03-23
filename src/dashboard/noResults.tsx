import React, { useMemo } from "react";

const { noResultsImage, alt, emptyResultsText, noResults } = BdApi.Webpack.getModule(m => m.noResultsImage && m.errorImage);

const intl = BdApi.Webpack.getModule(m => m.Messages);

function NoResults() {
  const showAlt = useMemo(() => Math.round(Math.random() * 10) === 5, [ ]);

  return (
    <div className="pb-no-results">
      <div className={`${noResultsImage}${showAlt ? ` ${alt}` : ""}`} />
      <div className={`${emptyResultsText} ${noResults}`}>{showAlt ? intl.Messages.SEARCH_NO_RESULTS_ALT : intl.Messages.SEARCH_NO_RESULTS}</div>
    </div>
  )
};

export default NoResults;