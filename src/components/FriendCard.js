import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./styles/friendsList.module.css";

const FriendCard = ({ avatar, name, isOnline, id }) => (
  <Fragment>
    <span className={isOnline ? style.statusOn : style.statusOff}></span>
    <img className={style.avatar} src={avatar} alt="" width="48" />
    <p className={style.name}>{name}</p>
  </Fragment>
);
FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string
};
export default FriendCard;
