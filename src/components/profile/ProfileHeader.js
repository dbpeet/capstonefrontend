import React from 'react';
import '../../app.css'

const ProfileHeader = (props) => {
  return (
    <div clasname='profile-header' >
      <img src={props.user.img_link} alt='avatar'/>
      <h3>{props.user.username}</h3>
    </div>
  );
};
export default ProfileHeader;