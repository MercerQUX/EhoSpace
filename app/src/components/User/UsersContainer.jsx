import { connect } from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  loadedPageAC,
  totalUsersAC,
  toggleIsFetchingAC,
  toggleIsDisabledFollowingAC,
  disableChangedFollowedAC,
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
    setUsers: (users) => dispatch(setUsersAC(users)),
    plusLoadedPage: () => dispatch(loadedPageAC()),
    totalUsers: (count) => dispatch(totalUsersAC(count)),
    toggleIsFetching: (toggle) => dispatch(toggleIsFetchingAC(toggle)),
    disabledChangedFollowing: () => dispatch(disableChangedFollowedAC()),
    toggleDisabledFollowing: (toggle) =>
      dispatch(toggleIsDisabledFollowingAC(toggle)),
  })
)(UsersPage);

export default UsersContainer;
