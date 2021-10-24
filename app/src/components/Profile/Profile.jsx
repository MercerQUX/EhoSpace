import React from "react";
import style from "../CSS/main.module.css";
import Post from "./PostModule/Post";
import PostCreater from "./PostModule/PostCreator";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div>ava+discription</div>
      <div>
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
