import React, { useState } from "react";
import style from "../CSS/main.module.css";
import Post from "./PostModule/Post";
import PostCreater from "./PostModule/PostCreator";
import ProfileData from "./ProfileData/ProfileData";

const Profile = (props) => {
  const [test, setTest] = useState([
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam dignissimos explicabo ipsam. Deleniti obcaecati veritatis magnam et incidunt itaque. Nemo nihil provident iusto labore reprehenderit odit nisi accusantium non.
    acilis laborum incidunt. Voluptas, laboriosam! Doloremque perferendis ratione, at enim ut odit dolore numquam! Aliquam nam iste distinctio dicta, ducimus magni.`,
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam dignissimos explicabo ipsam. Deleniti obcaecati veritatis magnam et incidunt itaque. Nemo nihil provident iusto labore reprehenderit odit nisi accusantium non.`,
    },
  ]);

  let mapPost = test.map((item) => <Post text={item.body} />);

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
