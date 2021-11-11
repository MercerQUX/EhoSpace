import { RootState } from "../../redux/redux-store";
import { createSelector } from "reselect";

export const getUsers = (state: RootState) => state.pageUsers.users;
export const getLoggedUser = (state: RootState) => state.authenticator.userID;
export const getPageSize = (state: RootState) => state.pageUsers.pageSize;
export const getLoadedPage = (state: RootState) =>
  state.pageUsers.numLoadedPages;
export const isFetching = (state: RootState) => state.pageUsers.isFetching;
export const isEmpty = (state: RootState) => state.pageUsers.isEmpty;
export const isFollowingDisabled = (state: RootState) =>
  state.pageUsers.isFollowingDisabled;

export const getUsersWithoutLoggedIn = createSelector(
  getUsers,
  getLoggedUser,
  (users, id) => {
    return users.filter((u) => u.id !== id);
  }
);
