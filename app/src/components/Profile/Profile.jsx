import React, { useState } from "react";
import style from "../CSS/main.module.css";
import Post from "./PostModule/Post";
import PostCreater from "./PostModule/PostCreator";
import ProfileData from "./ProfileData/ProfileData";

const Profile = (props) => {
  let mapPost = props.state.posts.map((item) => <Post text={item.body} />);

  return (
    <div className={style.profile}>
      <div>
        <ProfileData />
        <PostCreater />
        <div>{mapPost}</div>
      </div>
    </div>
  );
};

export default Profile;
