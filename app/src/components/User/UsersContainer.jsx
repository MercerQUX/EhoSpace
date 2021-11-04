import { connect } from "react-redux";
import { compose } from "redux";
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
  followingAC,
  toggleIsFetchingAC,
  getUsersTC,
  getTotalUsersTC,
  followedTC,
} from "../../redux/users-reducer";
import UsersPage from "./UsersPage";

let UsersContainerConnect = connect(
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
    following: (userID) => dispatch(followingAC(userID)),
    toggleIsFetching: (toggle) => dispatch(toggleIsFetchingAC(toggle)),
    getUsers: (page, limit) => dispatch(getUsersTC(page, limit)),
    getTotalUsers: () => dispatch(getTotalUsersTC()),
    followed: (id, user) => dispatch(followedTC(id, user)),
  })
);

export default compose(UsersContainerConnect)(UsersPage);
