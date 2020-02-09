import React from "react";
import PropTypes from "prop-types";
// import user from "./user.json";
import ProfileList from "./ProfileList";

const Profile = ({ name, tag, location, avatar, stats }) => {
  //   console.log(name);
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
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
