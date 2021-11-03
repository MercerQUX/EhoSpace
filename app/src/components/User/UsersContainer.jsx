import { connect } from "react-redux";
import {
  isEmpty,
  getChangeFollow,
  isFollowingDisabled,
  isFetching,
  getPageSize,
  getLoadedPage,
  getLoggedUser,
  getUsersWithoutLoggedIn,
} from "../../redux/react-selectors/users-selector";
import {
  followAC,
  unfollowAC,
  toggleIsFetchingAC,
  getUsersTC,
  getTotalUsersTC,
  followedTC,
} from "../../redux/users-reducer";
import UsersPage from "./UsersPage";

let UsersContainer = connect(
  (state) => ({
    users: getUsersWithoutLoggedIn(state),
    pageSize: getPageSize(state),
    loadedPage: getLoadedPage(state),
    isFetching: isFetching(state),
    getLoggedUser: getLoggedUser(state),
    isEmpty: isEmpty(state),
    changeFollow: getChangeFollow(state),
    isFollowingDisabled: isFollowingDisabled(state),
  }),
  (dispatch) => ({
    follow: (userID) => dispatch(followAC(userID)),
    unfollow: (userID) => dispatch(unfollowAC(userID)),
    toggleIsFetching: (toggle) => dispatch(toggleIsFetchingAC(toggle)),
    getUsers: (page, limit) => dispatch(getUsersTC(page, limit)),
    getTotalUsers: () => dispatch(getTotalUsersTC()),
    followed: (id, user) => dispatch(followedTC(id, user)),
  })
)(UsersPage);

export default UsersContainer;
