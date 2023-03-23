import React from "react";

import ErrorBoundary from "../Boundary";
import data from "../data";

const LinkButton = BdApi.Webpack.getModule((m) => m.prototype?.render?.toString().includes(".linkButtonIcon"), { searchExports: true });
const Globe = BdApi.Webpack.getModule(m => m.toString?.().includes("16H15V13C15 12.45 14.55"));
const Warning = BdApi.Webpack.getModule(m => m.toString?.().includes("11.25 14C11.25 14.691 10.69 15.25 10 15.25Z"));
const transitionTo = BdApi.Webpack.getModule((m) => typeof m === "function" && String(m).includes(`"transitionTo - Transitioning to "`), { searchExports: true }) as (pathname: string) => void;

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

function NavigatorButton({ isSelected }: { isSelected: boolean }) {
  const state = data.useState();
  
  return (
    <ErrorBoundary 
      fallback={(
        <div onClick={() => transitionTo("/publicServers")}>Public Servers</div>
      )}
    >
      <LinkButton 
        selected={isSelected}
        route="/publicServers"
        icon={Globe}
        text="Public Servers"
      >{!state.authToken && (
        <Tooltip
          hideOnClick={false}
          text="Account not connected"
        >
          {props => (
            <div {...props} className="pb-warning-icon">
              <Warning width={20} height={20} color="var(--info-warning-foreground)" />
            </div>
          )}
        </Tooltip>
      )}</LinkButton>
    </ErrorBoundary>
  )
}

export default NavigatorButton;