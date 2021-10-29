import React from "react";
import { useEffect } from "react";
import style from "../CSS/main.module.css";
import styleU from "../CSS/users.module.css";
import User from "./User";
import * as axios from "axios";

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
      });
  }, []);
  let getUsers = () => {
    axios
      .get(
        `http://localhost:4000/users?_page=${props.loadedPage}&_limit=${props.pageSize}`
      )
      .then((res) => {
        props.setUsers(res.data);
        props.plusLoadedPage();
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
      {mapUsers}
      <div style={{ textAlign: "center" }}>
        <button className={styleU.btnGetUsers} onClick={getUsers}>
          Load Users
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
