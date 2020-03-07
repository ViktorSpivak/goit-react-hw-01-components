import React from "react";
import PropTypes from "prop-types";
import style from "./friendsList.module.css";

const FriendCard = ({ avatar, name, isOnline }) => (
  <li className={style.friendsItem}>
    <span className={isOnline ? style.statusOn : style.statusOff}></span>
    <img className={style.avatar} src={avatar} alt="avatar" />
    <p className={style.name}>{name}</p>
  </li>
);
FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string
};
export default FriendCard;
