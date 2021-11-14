import { useEffect } from "react";
import style from "../CSS/main.module.css";
import styleU from "../CSS/users.module.css";
import User from "./User";
import Preloader from "../asset/common/Preloader";
import { usersType } from "../../redux/types/ReducersTypes";
import { defaultProps } from "./UsersContainer";

const UsersPage:React.FC<defaultProps> = ({ users, ...props }) => {
  useEffect(() => {
    if (users.length == 0) {
      props.getTotalUsers();
      props.getUsers(props.loadedPage, props.pageSize);
    }
  }, []);

  const getUsers = () => {
    props.toggleIsFetching(true);
    props.getUsers(props.loadedPage, props.pageSize);
  };

  let mapUsers = users.map((user) => (
    <User
      id={user.id}
      data={user}
      isFollowingDisabled={props.isFollowingDisabled}
      followed={props.followed}
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
