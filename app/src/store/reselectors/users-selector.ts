import { createSelector } from "reselect";
import { RootState } from "../store";
import { stateAuthID } from "./auth-selector";

export const stateAllUsers = (state: RootState) => state.userReducer.users;

export const stateUsersLimitLoading = (state: RootState) =>
  state.userReducer.limitShowUsers;

export const stateUsersShowed = (state: RootState) =>
  state.userReducer.usersShowed;

export const stateUsersIsFetching = (state: RootState) =>
  state.userReducer.isFetching;

export const stateUsersIsEmpty = (state: RootState) =>
  state.userReducer.isEmpty;

export const stateUsersIsFollowingDisabled = (state: RootState) =>
  state.userReducer.isFollowingDisabled;

export const stateUsersFollowingID = (state: RootState) =>
  state.userReducer.following;

export const stateFiltredUsers = createSelector(
  stateAllUsers,
  stateAuthID,
  (users, idLogged) =>
    users.filter((u) => {
      return u.id !== idLogged;
    })
);
