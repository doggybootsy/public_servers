import React from "react";
import NavigatorButton from "../navigatorButton";

const dmSidebar = BdApi.Webpack.getModule(m => m.Z?.toString?.().includes(".showDMHeader,"));

export default new class {
  undo() {};
  patch() {
    this.undo = BdApi.Patcher.after("publicServers", dmSidebar, "Z", (that, args, res) => {
      const isSelected = location.pathname.startsWith("/publicServers");

      for (const child of res.props.children.props.children) {
        if (!child) continue;
        if (!child.props.selected) continue;
        child.props.selected = !isSelected;
      };
  
      if (res.props.children.props.children.find((button?: { key: string }) => button?.key === "publicServers_linkButton")) return;
  
      res.props.children.props.children.push(
        <NavigatorButton isSelected={isSelected} key="publicServers_linkButton" />
      );
    });
  };
  unpatch() {
    this.undo();
  };
};