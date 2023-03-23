import React from "react";
import data from "../data";

const scollerClasses = BdApi.Webpack.getModule(m => m.scrollerBase && m.customTheme);
const transitionTo = BdApi.Webpack.getModule((m) => typeof m === "function" && String(m).includes(`"transitionTo - Transitioning to "`), { searchExports: true }) as (pathname: string) => void;

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (txt) => `${txt.charAt(0).toUpperCase()}${txt.substr(1).toLowerCase()}`
  );
}

function KeyWordButton({ selected, route, text }: { selected: boolean, route: string, text: string }) {
  return (
    <li
      onClick={() => !selected && transitionTo(route)}
      className={`pb-button${selected ? " pb-selected" : ""}`}
    >{text}</li>
  );
};

function Categories({ category }: { category: string  }) {
  const { keywords } = data.useState();

  return (
    <div className="pb-categories">
      <div className={`pb-scroller ${scollerClasses.thin} ${scollerClasses.fade}`}>
        <ul>
          <KeyWordButton 
            key="/publicServers/all"
            selected={category === "all"}
            route="/publicServers/all"
            text={toTitleCase("all")}
          />
          <KeyWordButton 
            key="/publicServers/featured"
            selected={category === "featured"}
            route="/publicServers/featured"
            text={toTitleCase("featured")}
          />
          <KeyWordButton 
            key="/publicServers/popular"
            selected={category === "popular"}
            route="/publicServers/popular"
            text={toTitleCase("popular")}
          />
          <li className="pb-seperator" />
          {keywords.map((keyword) => (
            <KeyWordButton 
              key={`/publicServers/${keyword}`}
              selected={category === keyword}
              route={`/publicServers/${keyword}`}
              text={toTitleCase(keyword)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;