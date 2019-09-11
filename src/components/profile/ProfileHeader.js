import React from 'react';
import '../../app.css'

const ProfileHeader = (props) => {
  return (
    <div clasName='profile-header' >
      <img src={props.user.img_link}/>
      <h3>{props.user.username}</h3>
    </div>
  );
};
export default ProfileHeader;