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
} from "../../redux/react-selectors/users-selector";
import {
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
    isFollowingDisabled: isFollowingDisabled(state),
  }),
  (dispatch) => ({
    getTotalUsers: () => dispatch(getTotalUsersTC()),
    toggleIsFetching: (toggle) => dispatch(toggleIsFetchingAC(toggle)),
    getUsers: (page, limit) => dispatch(getUsersTC(page, limit)),
    followed: (id, user) => dispatch(followedTC(id, user)),
  })
);

export default compose(UsersContainerConnect)(UsersPage);
