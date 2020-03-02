import React from "react";
import style from "./styles/friendsList.module.css";

const FriendCard = ({ friends }) =>
  friends.map((elem, idx) => (
    <li className={style.friendsItem} key={idx}>
      <span className={elem.isOnline ? style.statusOn : style.statusOff}></span>
      <img className={style.avatar} src={elem.avatar} alt="" width="48" />
      <p className={style.name}>{elem.name}</p>
    </li>
  ));
export default FriendCard;
