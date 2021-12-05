import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommonProfile } from "../../models/ICommonProfile";
import {
  fetchFullCountUsers,
  fetchUsers,
} from "../thunks/usersThunks";

export type initialStateType = {
  users: Array<ICommonProfile>;
  totalUsers: number;
  limitShowUsers: number;
  maxPage: number;
  pageShowed: number;
  isFetching: boolean;
  isEmpty: boolean;
  isFollowingDisabled: boolean;
  error: string;
};

let initialState: initialStateType = {
  users: [],
  totalUsers: 0,
  limitShowUsers: 4,
  maxPage: 1,
  pageShowed: 1,
  isFetching: false,
  isEmpty: false,
  isFollowingDisabled: false,
  error: "",
};

const userSlice = createSlice({
  name: "userPage",
  initialState,
  reducers: {
    following(state, action: PayloadAction<{ id: number; followed: boolean }>) {
      const {
        payload: { id, followed },
      } = action;
      state.users = state.users.map((u) =>
        u.id === id ? { ...u, followed: followed } : u
      );
    },
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchUsers.fulfilled.type]: (
      state,
      action: PayloadAction<Array<ICommonProfile>>
    ) => {
      state.pageShowed = state.pageShowed + 1;
      state.users = [...state.users, ...action.payload];
      state.isFetching = false;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
      state.isEmpty = true;
    },

    [fetchFullCountUsers.fulfilled.type]: (
      state,
      action: PayloadAction<number>
    ) => {
      state.totalUsers = action.payload - 1;
      state.maxPage = Math.ceil(state.totalUsers / state.limitShowUsers);
    },
    [fetchFullCountUsers.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
    },
  },
});

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;
