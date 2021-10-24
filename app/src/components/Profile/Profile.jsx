import React from "react";
import style from "../CSS/main.module.css";
import Post from "./PostModule/Post";
import PostCreater from "./PostModule/PostCreator";
import ProfileData from "./ProfileData/ProfileData";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div>
        <ProfileData/>
        <PostCreater/>
        <div>
          <Post/>
          <Post/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
