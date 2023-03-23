const { app } = BdApi.Webpack.getModule(m => m.app && m.layers);

const View = BdApi.Utils.findInTree(
  BdApi.ReactUtils.getInternalInstance(document.querySelector(`.${app}`)!),
  node => node.memoizedProps?.children?.length === 3,
  { walkable: [ "return" ] }
);

export default new class {
  undo() {};
  patch() {
    this.undo = BdApi.Patcher.after("publicServers", View.stateNode, "render", (that) => {
      const view = BdApi.Utils.findInTree((that as React.Component).props, (node) => node?.props?.path?.length > 5, { walkable: [ "children", "props" ] });
      if (!view) return;
      view.props.path.push("/publicServers/");
      view.props.path.push("/publicServers/:category");
      view.props.path.push("/publicServers/:category/:page");
      view.props.path = Array.from(new Set(view.props.path));
    });
    View.stateNode.forceUpdate();
  };
  unpatch() {
    this.undo();
    View.stateNode.forceUpdate();
  };
};