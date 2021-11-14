import {
  usersType,
  RootState,
  getUsersWithoutLoggedIn,
  getPageSize,
  getLoadedPage,
  isFetching,
  getLoggedUser,
  isEmpty,
  isFollowingDisabled,
  AppDispatch,
  getTotalUsersTC,
  toggleIsFetchingAC,
  getUsersTC,
  followedTC,
} from ".";
import { connect } from "react-redux";
import { compose } from "redux";
import { UsersPage } from "./UsersPage";

type TStateProps = {};

export interface defaultPropsUsers {
  users: Array<usersType>;
  pageSize: number;
  loadedPage: number;
  isFetching: boolean;
  getLoggedUser: number;
  isEmpty: boolean;
  isFollowingDisabled: boolean;
  getTotalUsers: () => void;
  toggleIsFetching: (toggle: boolean) => void;
  getUsers: (page: any, limit: any) => void;
  followed: (id: any, user: any) => void;
}

let UsersContainerConnect = connect(
  (state: RootState) => ({
    users: getUsersWithoutLoggedIn(state),
    pageSize: getPageSize(state),
    loadedPage: getLoadedPage(state),
    isFetching: isFetching(state),
    getLoggedUser: getLoggedUser(state),
    isEmpty: isEmpty(state),
    isFollowingDisabled: isFollowingDisabled(state),
  }),
  (dispatch: AppDispatch) => ({
    getTotalUsers: () => dispatch(getTotalUsersTC()),
    toggleIsFetching: (toggle: boolean) => dispatch(toggleIsFetchingAC(toggle)),
    getUsers: (page: any, limit: any) => dispatch(getUsersTC(page, limit)),
    followed: (id: any, user: any) => dispatch(followedTC(id, user)),
  })
);

export default compose<any>(UsersContainerConnect)(UsersPage);
