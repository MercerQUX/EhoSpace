import { useEffect } from "react";
import style from "../CSS/main.module.css";
import styleU from "../CSS/users.module.css";
import User from "./User";
import Preloader from "../common/Preloader";

const UsersPage = ({users,...props}) => {
  useEffect(() => {
    props.getTotalUsers();
    props.getUsers(props.loadedPage, props.pageSize);
  }, []);

  props.followed(props.changeFollow, users[props.changeFollow - 1]);

  const getUsers = () => {
    props.toggleIsFetching(true);
    props.getUsers(props.loadedPage, props.pageSize);
  };

  let mapUsers = users.map((user) => (
    <User
      id={user.id}
      data={user}
      following={props.following}
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
