import style from "../../main.module.css";
import styleU from "./users.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import {
  getAuthID,
  getAuthIsLoading,
} from "../../store/reselectors/auth-selector";
import { ICommonProfile } from "../../models/ICommonProfile";
import {
  getIsFetching,
  getIsEmpty,
  getIsFollowingDisabled,
  getShowedUsers,
  getLimitLoadingUsers,
  getUsers,
} from "../../store/reselectors/users-selector";
import { getPartUsers } from "../../store/thunks/usersThunks";
import { Preloader } from "../../asset/common/Preloader";
import { User } from "./User";

const UsersPage: React.FC = () => {
  const {
    users,
    limitShowedUsers,
    loadedUsers,
    isFetching,
    loggedID,
    isEmpty,
    isFollowingDisabled,
  } = {
    users: useAppSelector(getUsers),
    limitShowedUsers: useAppSelector(getLimitLoadingUsers),
    loadedUsers: useAppSelector(getShowedUsers),
    isFetching: useAppSelector(getIsFetching),
    loggedID: useAppSelector(getAuthID),
    isEmpty: useAppSelector(getIsEmpty),
    isFollowingDisabled: useAppSelector(getIsFollowingDisabled),
  };
  const dispatch = useAppDispatch();
  const getUsersParts = async (limit: number, startFrom: number) =>
    await dispatch(getPartUsers({ limit: limit, startFrom: startFrom }));

  useEffect(() => {
    getUsersParts(limitShowedUsers, loadedUsers);
  }, []);
  let mapUsers = users.map((user) => (
    <User
      id={user.id}
      key={user.id}
      data={user}
      isFollowingDisabled={isFollowingDisabled}
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
        <button
          className={styleU.btnGetUsers}
          onClick={() => getUsersParts(limitShowedUsers, loadedUsers)}
        >
          Load Users
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
