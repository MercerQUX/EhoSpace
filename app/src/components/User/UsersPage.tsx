import style from "../../main.module.css";
import styleU from "./users.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import { isAuthInitialization } from "../../store/reselectors/auth-selector";
import {
  getIsFetching,
  getIsEmpty,
  getIsFollowingDisabled,
  getUsers,
  getFollowingID,
} from "../../store/reselectors/users-selector";
import { getPartUsers } from "../../store/thunks/usersThunks";
import { Preloader } from "../../asset/common/Preloader";
import { User } from "./User";

const UsersPage: React.FC = () => {
  const { users, isFetching, isEmpty, isFollowingDisabled, friends, isAuth } = {
    users: useAppSelector(getUsers),
    isFetching: useAppSelector(getIsFetching),
    isEmpty: useAppSelector(getIsEmpty),
    isFollowingDisabled: useAppSelector(getIsFollowingDisabled),
    friends: useAppSelector(getFollowingID),
    isAuth: useAppSelector(isAuthInitialization),
  };
  const dispatch = useAppDispatch();
  const getUsersParts = () => dispatch(getPartUsers());

  useEffect(() => {
    getUsersParts();
  }, []);

  let mapUsers = users.map((user) => (
    <User
      id={user.id}
      key={user.id}
      data={user}
      isFollowingDisabled={isFollowingDisabled}
      friends={friends}
      isAuth={isAuth}
    />
  ));

  return (
    <div className={style.profile}>
      {isFetching && !isEmpty ? <Preloader /> : <div>{mapUsers}</div>}
      <div style={{ textAlign: "center" }}>
        {isEmpty ? (
          <span className={styleU.error}>Пользователей не найдено</span>
        ) : null}
        <br />
        <button className={styleU.btnGetUsers} onClick={() => getUsersParts()}>
          Load Users
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
