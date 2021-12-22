import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommonProfile } from "../../models/ICommonProfile";
import { getPartUsers, setFollowed } from "../thunks/users-thunk";

export type initialStateType = {
  users: Array<ICommonProfile>;
  limitShowUsers: number;
  following: Array<number>;
  usersShowed: number;
  isFetching: boolean;
  isEmpty: boolean;
  isFollowingDisabled: boolean;
  error: string;
};

let initialState: initialStateType = {
  users: [],
  following: [],
  limitShowUsers: 4,
  usersShowed: -1,
  isFetching: true,
  isEmpty: false,
  isFollowingDisabled: false,
  error: "",
};

const userSlice = createSlice({
  name: "userPage",
  initialState,
  reducers: {
    setFriends(state, action: PayloadAction<Array<number>>) {
      state.following = action.payload ? Object.values(action.payload) : [];
    },
  },
  extraReducers: {
    [getPartUsers.pending.type]: (state) => {
      
    },
    [getPartUsers.fulfilled.type]: (
      state,
      action: PayloadAction<Array<ICommonProfile>>
    ) => {
      state.users = [...state.users, ...action.payload];
      state.usersShowed = state.users.length - 1;
      state.isFetching = false;
      state.isEmpty = false;
    },
    [getPartUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
      state.isEmpty = true;
    },
    [setFollowed.pending.type]: (state) => {
      state.isFollowingDisabled = true;
    },
    [setFollowed.fulfilled.type]: (
      state,
      action: PayloadAction<Array<number>>
    ) => {
      if (action.payload === null) {
        state.following = [1030];
      } else {
        state.following = action.payload;
      }
      state.isFollowingDisabled = false;
    },
    [setFollowed.rejected.type]: (state) => {
      state.isFollowingDisabled = false;
    },
  },
});

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;
