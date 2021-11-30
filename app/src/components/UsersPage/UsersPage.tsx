import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import { getAuthID } from "../../store/reselectors/auth-selector";
import {
  getUsersWithoutLoggedIn,
  getPageSize,
  getLoadedPage,
  getIsFetching,
  getIsEmpty,
  getIsFollowingDisabled,
} from "../../store/reselectors/users-selector";
import { fetchFullCountUsers } from "../../store/thunks/usersThunks";

export const UsersPage: React.FC = () => {
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
  let getTotalUsers = fetchFullCountUsers;
  return <div></div>;
};


