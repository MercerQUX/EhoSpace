import { createSelector } from "reselect";

export const getUsers = (state) => state.pageUsers.users;
export const getLoggedUser = (state) => state.authenticator.userID;
export const getPageSize = (state) => state.pageUsers.pageSize;
export const getLoadedPage = (state) => state.pageUsers.numLoadedPages;
export const isFetching = (state) => state.pageUsers.isFetching;
export const isEmpty = (state) => state.pageUsers.isEmpty;
export const getChangeFollow = (state) => state.pageUsers.changeFollow;
export const isFollowingDisabled = (state) =>
  state.pageUsers.isFollowingDisabled;

export const getUsersWithoutLoggedIn = createSelector(
  getUsers,
  getLoggedUser,
  (users, id) => {
    return users.filter((u) => u.id !== id);
  }
);
