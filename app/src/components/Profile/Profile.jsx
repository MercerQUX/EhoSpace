import React, { useState } from "react";
import style from "../CSS/main.module.css";
import Post from "./PostModule/Post";
import PostCreaterContainer from "./PostModule/PostCreaterContainer";
import ProfileData from "./ProfileData/ProfileData";

const Profile = (props) => {
  let mapPost = props.store
    .getState()
    .pageProfile.posts.map((item) => <Post text={item.body} />);
  return (
    <div className={style.profile}>
      <div>
        <ProfileData />
        <PostCreaterContainer />
        <div>{mapPost}</div>
      </div>
    </div>
  );
};

export default Profile;
