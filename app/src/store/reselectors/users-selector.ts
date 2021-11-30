import { createSelector } from "reselect";
import { RootState } from "../store";

export const getUsers = (state: RootState) => state.userReducer.users;
export const getPageSize = (state: RootState) => state.userReducer.pageSize;
export const getLoadedPage = (state: RootState) =>
  state.userReducer.numLoadedPages;
export const getIsFetching = (state: RootState) => state.userReducer.isFetching;
export const getIsEmpty = (state: RootState) => state.userReducer.isEmpty;
export const getIsFollowingDisabled = (state: RootState) =>
  state.userReducer.isFollowingDisabled;

const loggedID = (state: RootState) => state.authReducer.id;
export const getUsersWithoutLoggedIn = createSelector(
  getUsers,
  loggedID,
  (users, id) => {
    return users.filter((u) => u.id !== id);
  }
);
