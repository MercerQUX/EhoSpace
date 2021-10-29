import React from "react";
import { useEffect } from "react";
import style from "../CSS/main.module.css";
import styleU from "../CSS/users.module.css";
import User from "./User";
import * as axios from "axios";
import Preloader from "../common/Preloader";

const UsersPage = (props) => {
  useEffect(() => {
    axios
      .get(`http://localhost:4000/totalUsers`)
      .then((res) => props.totalUsers(res.data[0]));

    axios
      .get(
        `http://localhost:4000/users?_page=${props.loadedPage}&_limit=${props.pageSize}`
      )
      .then((res) => {
        props.setUsers(res.data);
        props.plusLoadedPage();
        props.toggleIsFetching(false);
      });
  }, []);
  let getUsers = () => {
    props.toggleIsFetching(true);
    axios
      .get(
        `http://localhost:4000/users?_page=${props.loadedPage}&_limit=${props.pageSize}`
      )
      .then((res) => {
        props.setUsers(res.data);
        props.plusLoadedPage();
        props.toggleIsFetching(false);
      });
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
