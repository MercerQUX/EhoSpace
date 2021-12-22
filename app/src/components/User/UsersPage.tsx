import styleMain from "../../main.module.sass";
import style from "./users.module.sass";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import { isAuthInitialization } from "../../store/reselectors/auth-selector";
import {
  getIsFetching,
  getIsEmpty,
  getIsFollowingDisabled,
  getFollowingID,
  getFiltredUsers,
} from "../../store/reselectors/users-selector";
import { getPartUsers } from "../../store/thunks/users-thunk";
import { Preloader } from "../../asset/common/Preloader";
import { User } from "./User";
import { scrollingBy } from "../../helpers/scrollHelper";

const UsersPage: React.FC = () => {
  const { users, isFetching, isEmpty, isFollowingDisabled, friends, isAuth } = {
    users: useAppSelector(getFiltredUsers),
    isFetching: useAppSelector(getIsFetching),
    isEmpty: useAppSelector(getIsEmpty),
    isFollowingDisabled: useAppSelector(getIsFollowingDisabled),
    friends: useAppSelector(getFollowingID),
    isAuth: useAppSelector(isAuthInitialization),
  };
  const dispatch = useAppDispatch();
  const getUsersParts = useCallback(async () => {
    await dispatch(getPartUsers());
    scrollingBy(window.innerHeight);
  }, [dispatch]);

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
    <div className={styleMain.users}>
      {isFetching ? <Preloader /> : <div>{mapUsers}</div>}
      <div className={style.container_btn}>
        {isEmpty ? (
          <span className={style.notFound__error}>
            Пользователей не найдено
          </span>
        ) : null}
        <br />
        <button className={style.getUser_btn} onClick={() => getUsersParts()}>
          Load Users
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
