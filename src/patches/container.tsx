import React, { useLayoutEffect } from "react";
import Dashboard from "../dashboard";

const Route = BdApi.Webpack.getModule(m => m.toString?.().includes(".impressionProperties,"));
const { container } = BdApi.Webpack.getModule(m => m.container && m.fullWidth);

const inst = BdApi.ReactUtils.getOwnerInstance(document.querySelector<HTMLElement>(`.${container}`)!)!;

function Navigate(props: { history: { push(pathName: string): void }, match: { params: { category?: string, page?: string } } }) {
  useLayoutEffect(() => {
    const page = props.match.params.page ?? "1";
    const category = props.match.params.category ?? "featured";
    props.history.push(`/publicServers/${category!}/${page!}`);
  }, [ ]);
  
  return <React.Fragment />;
};

// Replace the old childs type with a custom one
// Idk why but this fixes a annoying issue
let type: any;
function NewType() {
  const result = type({});

  const { children } = BdApi.Utils.findInTree(result, (node) => node && node.children?.length > 5, { walkable: [ "children", "props" ] });
  
  children.push(
    <Route 
      disableTrack={true}
      exact={true}
      render={(props: any) => <Navigate {...props} />}
      path="/publicServers/"
    />,
    <Route 
      disableTrack={true}
      exact={true}
      render={(props: any) => <Navigate {...props} />}
      path="/publicServers/:category"
    />,
    <Route 
      disableTrack={true}
      exact={true}
      render={(props: any) => <Dashboard {...props} />}
      path="/publicServers/:category/:page"
    />
  );

  return result;
};

export default new class {
  undo() {};
  patch() {
    this.undo = BdApi.Patcher.after("publicServers", inst, "render", (that, args, res: any) => {
      if (!type) type = res.props.children.type;
      
      res.props.children = <NewType />;
    });
    
    inst.forceUpdate();
  };
  unpatch() {
    this.undo();
    inst.forceUpdate();
  };
};