import React from "react";
import style from "../CSS/users.module.css";
import { NavLink } from "react-router-dom";

const User = ({ data, isFollowingDisabled, ...props }) => {
  return (
    <div className={style.wrapperUser}>
      <div className={style.leftContent}>
        <NavLink className={style.userIMG} to={`profile/${data.id}`}>
          <img src={data.avatar} alt="avatar" />
        </NavLink>

        <div className={style.dataBlock}>
          <div>{`${data.name} ${data.surname}`}</div>
          <div>{data.nickname}</div>
          <div>{data.status}</div>
        </div>
      </div>
      <div className={style.rightContent}>
        <strong>{data.country}</strong>
        {data.followed ? (
          <button
            className={style.follow}
            onClick={(e) => props.followed(data, false)}
            disabled={isFollowingDisabled}
          >
            Follow
          </button>
        ) : (
          <button
            className={style.unfollow}
            onClick={(e) => props.followed(data, true)}
            disabled={isFollowingDisabled}
          >
            Unfollow
          </button>
        )}
        <strong>{data.city}</strong>
      </div>
    </div>
  );
};

export default User;
