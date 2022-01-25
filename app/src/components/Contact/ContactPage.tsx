import styleMain from "../../main.module.sass";
import style from "./contact.module.sass";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import { Preloader } from "../../asset/common/Preloader";
import { User } from "./Contact";
import {
  stateContactError,
  stateGetFriends,
  stateIsFetching,
} from "../../store/reselectors/contact-selector";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { stateUsersFollowingID } from "../../store/reselectors/users-selector";
import { getFriends } from "../../store/thunks/contact-thunk";

const UsersPage: React.FC = () => {
  const { users, isFetching, error, userFollowing, dispatch } = {
    users: useAppSelector(stateGetFriends),
    isFetching: useAppSelector(stateIsFetching),
    error: useAppSelector(stateContactError),
    userFollowing: useAppSelector(stateUsersFollowingID),
    dispatch: useAppDispatch(),
  };

  useEffect(() => {
    dispatch(getFriends(userFollowing));
  }, [userFollowing]);

  let mapUsers =
    users.length === 0 && !error ? (
      <div className={style.wrapperUser}>
        <NavLink to={"/users"} className={style.notUser}>
          You don't have more than one subscription! Perhaps you want to go to
          the users tab and find your friends?
        </NavLink>
      </div>
    ) : (
      users.map((user) => <User id={user.id} key={user.id} data={user} />)
    );
  return (
    <div className={styleMain.users}>
      {isFetching ? <Preloader /> : <div>{mapUsers}</div>}
      {error ? (
        <div className={style.wrapperUser}>
          <span className={style.error}>{error}</span>
        </div>
      ) : null}
    </div>
  );
};

export default UsersPage;
