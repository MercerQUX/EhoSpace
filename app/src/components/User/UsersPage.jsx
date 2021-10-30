import React from "react";
import { useEffect } from "react";
import style from "../CSS/main.module.css";
import styleU from "../CSS/users.module.css";
import User from "./User";
import * as axios from "axios";
import Preloader from "../common/Preloader";
import { getNumberTotalUsersAPI, getPartUsersAPI } from "../../API/API";

const UsersPage = (props) => {
  useEffect(() => {
    getNumberTotalUsersAPI().then((data) => props.totalUsers(data));
    requestUsers();
  }, []);

  const requestUsers = () => {
    getPartUsersAPI(props.loadedPage, props.pageSize).then((data) => {
      props.setUsers(data);
      props.plusLoadedPage();
      props.toggleIsFetching(false);
    });
  };
  const getUsers = () => {
    props.toggleIsFetching(true);
    requestUsers();
  };

  let mapUsers = props.users.map((user) => (
    <User
      id={user.id}
      data={user}
      follow={props.follow}
      unfollow={props.unfollow}
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
