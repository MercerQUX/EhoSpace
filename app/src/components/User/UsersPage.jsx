import React from "react";
import { useEffect } from "react";
import style from "../CSS/main.module.css";
import styleU from "../CSS/users.module.css";
import User from "./User";
import Preloader from "../common/Preloader";

const UsersPage = (props) => {
  useEffect(() => {
    props.getTotalUsers();
    props.getUsers(props.loadedPage, props.pageSize);
  }, []);

  props.followed(props.changeFollow, props.users[props.changeFollow - 1]);

  const getUsers = () => {
    props.toggleIsFetching(true);
    props.getUsers(props.loadedPage, props.pageSize);
  };

  let mapUsers = props.users.map((user) => (
    <User
      id={user.id}
      data={user}
      follow={props.follow}
      unfollow={props.unfollow}
      disabledFollowing={props.isFollowingDisabled}
    />
  ));
  return (
    <div className={style.profile}>
      {props.isFetching && !props.isEmpty ? (
        <Preloader />
      ) : (
        <div>{mapUsers}</div>
      )}
      <div style={{ textAlign: "center" }}>
        {props.isEmpty ? (
          <span className={styleU.error}>Пользователей не найдено</span>
        ) : null}
        <br />
        <button className={styleU.btnGetUsers} onClick={getUsers}>
          Load Users
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
