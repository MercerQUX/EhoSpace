import { connect } from "react-redux";
import { compose } from "redux";
import {
  isEmpty,
  isFetching,
  getPageSize,
  getLoadedPage,
  getLoggedUser,
  getUsersWithoutLoggedIn,
  isFollowingDisabled,
} from "./users-selector";
import { usersType } from "../../redux/types/ReducersTypes";
import { AppDispatch, RootState } from "../../redux/redux-store";
import {
  toggleIsFetchingAC,
  getUsersTC,
  getTotalUsersTC,
  followedTC,
} from "../../redux/users-creator";
import UsersPage from "./UsersPage";

type TStateProps = {
  users: Array<usersType>;
  pageSize: number;
  loadedPage: number;
  isFetching: boolean;
  getLoggedUser: number;
  isEmpty: boolean;
  isFollowingDisabled: boolean;
};

type TDispatchProps = {
  getTotalUsers: () => void;
  toggleIsFetching: (toggle: boolean) => void;
  getUsers: (page: any, limit: any) => void;
  followed: (id: any, user: any) => void;
};

export type defaultProps = TStateProps & TDispatchProps;

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

export default compose<defaultProps>(UsersContainerConnect)(UsersPage);
