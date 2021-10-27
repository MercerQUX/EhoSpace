import React, { useState } from "react";
import style from "../CSS/main.module.css";
import PostCreaterContainer from "./PostModule/PostCreaterContainer";
import ProfileData from "./ProfileData/ProfileData";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div>
        <ProfileData />
        <PostCreaterContainer />
      </div>
    </div>
  );
};

export default Profile;
