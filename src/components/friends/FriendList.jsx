import React from "react";
import PropTypes from "prop-types";
import FriendCard from "./FriendCard";
import style from "./friendsList.module.css";

const FriendList = ({ friends }) => (
  <ul className={style.friendsList}>
    {friends.map((elem, idx) => (
      <li className={style.friendsItem} key={idx}>
        <FriendCard {...elem} />
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.array
};
export default FriendList;
