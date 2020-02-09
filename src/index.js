import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/Profile";
import user from "./components/user";
const App = () => {
  //   console.log(user);
  return <Profile {...user} />;
};
ReactDOM.render(<App />, document.getElementById("root"));
