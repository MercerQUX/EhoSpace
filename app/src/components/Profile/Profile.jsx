import React, { useState } from "react";
import style from "../CSS/main.module.css";
import PostCreaterContainer from "./PostModule/PostCreaterContainer";
import ProfileDataContainer from "./ProfileData/ProfileDataContainer";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div>
        <ProfileDataContainer />
        <PostCreaterContainer />
      </div>
    </div>
  );
};

export default Profile;
