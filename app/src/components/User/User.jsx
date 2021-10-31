import React from "react";
import style from "../CSS/users.module.css";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div className={style.wrapperUser}>
      <div className={style.leftContent}>
        <NavLink className={style.userIMG} to={`profile/${props.data.id}`}>
          <img src="" alt="avatar" />
        </NavLink>

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
            disabled={props.disabledFollowing}
          >
            Follow
          </button>
        ) : (
          <button
            className={style.unfollow}
            onClick={() => props.unfollow(props.data.id)}
            disabled={props.disabledFollowing}
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
