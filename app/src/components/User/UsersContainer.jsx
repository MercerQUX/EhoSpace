import { connect } from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  loadedPageAC,
  totalUsersAC,
} from "../../redux/users-reducer";
import UsersPage from "./UsersPage";

let UsersContainer = connect(
  (state) => ({
    users: state.pageUsers.users,
    pageSize: state.pageUsers.pageSize,
    loadedPage: state.pageUsers.numLoadedPages,
  }),
  (dispatch) => ({
    follow: (userID) => dispatch(followAC(userID)),
    unfollow: (userID) => dispatch(unfollowAC(userID)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    plusLoadedPage: () => dispatch(loadedPageAC()),
    totalUsers: (count) => dispatch(totalUsersAC(count)),
  })
)(UsersPage);

export default UsersContainer;
