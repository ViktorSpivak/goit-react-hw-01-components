import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import ProfileCard from "./components/Profile";
import user from "./components/user";
import StatisticalCard from "./components/Statistics";
import statisticalData from "./components/statistical-data";
import FriendList from "./components/FriendList";
import friends from "./components/friends";
import Transaction from "./components/Transaction";
import transactionData from "./components/transactions";

ReactDOM.render(
  <Fragment>
    <ProfileCard {...user} />
    <StatisticalCard title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <Transaction transactions={transactionData} />
  </Fragment>,
  document.getElementById("root")
);
