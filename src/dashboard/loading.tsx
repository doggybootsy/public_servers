import React from "react";

const Spinner = BdApi.Webpack.getModule(m => m.Type?.PULSING_ELLIPSIS, { searchExports: true });

function Loading() {
  return (
    <div className="pb-loading">
      <Spinner type={Spinner.Type.WANDERING_CUBES} className="pb-spinner" />
    </div>
  );
};

export default Loading;