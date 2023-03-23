import React from "react";
import data from "../data";

const UserStore = BdApi.Webpack.getModule(m => m.getName?.() === "UserStore");
const useStateFromStores = BdApi.Webpack.getModule(m => m.toString().includes("useStateFromStores"));

function WrongUser() {
  const state = data.useState();

  const user = useStateFromStores([ UserStore ], () => UserStore.getUser(state.id));  
  
  return (
    <div className="pb-wrong-user">
      <h2 className="pb-wrong-user-title">Wrong User</h2>
      <div className="pb-wrong-user-who">
        Login into '<span>{user ? user.tag : state.id}</span>'
      </div>
    </div>
  )
};

export default WrongUser;