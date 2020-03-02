import React from "react";
import FriendCard from "./FriendCard";
import style from "./styles/friendsList.module.css";

const FriendList = ({ friends }) => (
  <ul className={style.friendsList}>
    <FriendCard friends={friends} />
  </ul>
);

export default FriendList;
