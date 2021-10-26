import React from "react";
import style from "../../CSS/profile.module.css";
import { changeInputPostAction, addPostAction } from "../../../redux/profile-reducer";


const PostCreater = (props) => {
  return (
    <div className={style.wrapperCreaterPost}>
      <h2>My Post</h2>
      <div>
        <textarea
          value={props.textPost}
          onChange={(e) => props.dispatch(changeInputPostAction(e.target.value))}
        ></textarea>
      </div>
      <div className={style.wrapperButPost}>
        <button onClick={() => props.dispatch(addPostAction())}>Posting Post</button>
        <button>Remove Post</button>
      </div>
    </div>
  );
};

export default PostCreater;
