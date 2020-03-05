import React, { Fragment } from "react";
import ProfileCard from "./components/profile/Profile";
import user from "./data/user";
import StatisticalCard from "./components/statistic/Statistics";
import statisticData from "./data/statistical-data";
import FriendList from "./components/friends/FriendList";
import friends from "./data/friends";
import Transaction from "./components/transactions/Transaction";
import transactionData from "./data/transactions";

const App = () => (
  <Fragment>
    <ProfileCard {...user} />
    <StatisticalCard title="Upload stats" stats={statisticData} />
    <FriendList friends={friends} />
    <Transaction transactions={transactionData} />
  </Fragment>
);
export default App;
