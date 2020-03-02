import React from "react";
import PropTypes from "prop-types";
import card from "./styles/profile.module.css";
import ProfileList from "./ProfileList";

const Profile = ({ name, tag, location, avatar, stats }) => {
  //   console.log(name);
  return (
    <div className={card.profile}>
      <div className={card.description}>
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className={card.name}>{name}</p>
        <p className={card.tag}>@{tag}</p>
        <p className={card.location}>{location}</p>
      </div>
      <ProfileList {...stats} />
    </div>
  );
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape().isRequired
};
export default Profile;
