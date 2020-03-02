import React from "react";
import PropTypes from "prop-types";
import card from "./styles/profile.module.css";

const ProfileList = ({ followers, views, likes }) => (
  <ul className={card.stats}>
    <li className={card.profileItem}>
      <span className={card.label}>Followers</span>
      <span className={card.quantity}>{followers}</span>
    </li>
    <li className={card.profileItem}>
      <span className={card.label}>Views</span>
      <span className={card.quantity}>{views}</span>
    </li>
    <li className={card.profileItem}>
      <span className={card.label}>Likes</span>
      <span className={card.quantity}>{likes}</span>
    </li>
  </ul>
);
ProfileList.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
};
export default ProfileList;
