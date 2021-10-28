import React from "react";
import style from "../CSS/users.module.css";

const User = (props) => {
  return (
    <div className={style.wrapperUser}>
      <div className={style.leftContent}>
        <img src="" alt="avatar" className={style.userIMG} />
        <div className={style.dataBlock}>
          <div>{props.data.fullName}</div>
          <div>{props.data.status}</div>
        </div>
      </div>
      <div className={style.rightContent}>
        <strong>{props.data.country}</strong>
        {props.data.followed ? (
          <button
            className={style.follow}
            onClick={() => props.follow(props.data.id)}
          >
            Follow
          </button>
        ) : (
          <button
            className={style.unfollow}
            onClick={() => props.unfollow(props.data.id)}
          >
            Unfollow
          </button>
        )}
        <strong>{props.data.city}</strong>
      </div>
    </div>
  );
};

export default User;
