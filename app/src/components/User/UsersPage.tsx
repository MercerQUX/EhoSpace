import style from "../../main.module.css";
import styleU from "./users.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import { getAuthID } from "../../store/reselectors/auth-selector";
import { ICommonProfile } from "../../models/ICommonProfile";
import {
  getUsersWithoutLoggedIn,
  getPageSize,
  getLoadedPage,
  getIsFetching,
  getIsEmpty,
  getIsFollowingDisabled,
} from "../../store/reselectors/users-selector";
import { User } from "./User";
import {
  fetchFullCountUsers,
  fetchFollow,
  fetchUsers,
} from "../../store/thunks/usersThunks";
import { Preloader } from "../../asset/common/Preloader";

const UsersPage: React.FC = () => {
  const {
    users,
    pageSize,
    loadedPage,
    isFetching,
    loggedID,
    isEmpty,
    isFollowingDisabled,
  } = {
    users: useAppSelector(getUsersWithoutLoggedIn),
    pageSize: useAppSelector(getPageSize),
    loadedPage: useAppSelector(getLoadedPage),
    isFetching: useAppSelector(getIsFetching),
    loggedID: useAppSelector(getAuthID),
    isEmpty: useAppSelector(getIsEmpty),
    isFollowingDisabled: useAppSelector(getIsFollowingDisabled),
  };
  const dispatch = useAppDispatch();
  let getTotalUsers = () => dispatch(fetchFullCountUsers);
  const getUsers = (page: number, limit: number) =>
    dispatch(fetchUsers({ page: page, limit: limit }));
  const followed = (isFollowed: boolean, selectUsers: ICommonProfile) =>
    dispatch(fetchFollow({ isFollowed, selectUsers }));

  useEffect(() => {
    if (users.length == 0) {
      dispatch(getTotalUsers());
      getUsers(loadedPage, pageSize);
    }
  }, []);
  let mapUsers = users.map((user) => (
    <User
      id={user.id}
      data={user}
      isFollowingDisabled={isFollowingDisabled}
      followed={followed}
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
          onClick={() => getUsers(loadedPage, pageSize)}
        >
          Load Users
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
