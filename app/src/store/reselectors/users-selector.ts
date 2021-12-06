import { createSelector } from "reselect";
import { RootState } from "../store";

export const getUsers = (state: RootState) => state.userReducer.users;
export const getLimitLoadingUsers = (state: RootState) =>
  state.userReducer.limitShowUsers;
export const getShowedUsers = (state: RootState) =>
  state.userReducer.usersShowed;
export const getIsFetching = (state: RootState) => state.userReducer.isFetching;
export const getIsEmpty = (state: RootState) => state.userReducer.isEmpty;
export const getIsFollowingDisabled = (state: RootState) =>
  state.userReducer.isFollowingDisabled;
export const getFollowingID = (state:RootState)=>
state.userReducer.following

const loggedID = (state: RootState) => state.authReducer.id;
