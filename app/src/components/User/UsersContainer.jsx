import { connect } from "react-redux";
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
    users: state.pageUsers.users,
    pageSize: state.pageUsers.pageSize,
    loadedPage: state.pageUsers.numLoadedPages,
    isFetching: state.pageUsers.isFetching,
    isEmpty: state.pageUsers.isEmpty,
    changeFollow: state.pageUsers.changeFollow,
    isFollowingDisabled: state.pageUsers.isFollowingDisabled,
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
