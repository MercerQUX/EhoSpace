import style from "../../main.module.css";
import styleU from "./users.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import { getAuthID } from "../../store/reselectors/auth-selector";
import { ICommonProfile } from "../../models/ICommonProfile";
import {
  getUsersWithoutLoggedIn,
  getIsFetching,
  getIsEmpty,
  getIsFollowingDisabled,
  getAmountShowedPage,
  getLimitLoadingUsers,
  getMaxPageForShow,
} from "../../store/reselectors/users-selector";
import {
  fetchFullCountUsers,
  fetchUsers,
} from "../../store/thunks/usersThunks";
import { Preloader } from "../../asset/common/Preloader";
import { User } from "./User";

const UsersPage: React.FC = () => {
  const {
    users,
    limitShowedUsers,
    loadedPage,
    isFetching,
    loggedID,
    isEmpty,
    isFollowingDisabled,
    maxPage,
  } = {
    users: useAppSelector(getUsersWithoutLoggedIn),
    limitShowedUsers: useAppSelector(getLimitLoadingUsers),
    loadedPage: useAppSelector(getAmountShowedPage),
    isFetching: useAppSelector(getIsFetching),
    loggedID: useAppSelector(getAuthID),
    isEmpty: useAppSelector(getIsEmpty),
    isFollowingDisabled: useAppSelector(getIsFollowingDisabled),
    maxPage: useAppSelector(getMaxPageForShow),
  };
  const dispatch = useAppDispatch();
  let getTotalUsers = () => dispatch(fetchFullCountUsers);
  const getUsers = (page: number, limit: number, mp: number) =>
    dispatch(fetchUsers({ page: page, limit: limit, maxPage: mp }));

  useEffect(() => {
    if (users.length == 0) {
      dispatch(getTotalUsers());
      getUsers(loadedPage, limitShowedUsers, maxPage);
    }
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
          onClick={() => getUsers(loadedPage, limitShowedUsers, maxPage)}
        >
          Load Users
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
