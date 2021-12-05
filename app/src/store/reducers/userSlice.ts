import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommonProfile } from "../../models/ICommonProfile";
import { getPartUsers } from "../thunks/usersThunks";

export type initialStateType = {
  users: Array<ICommonProfile>;
  limitShowUsers: number;
  usersShowed: number;
  isFetching: boolean;
  isEmpty: boolean;
  isFollowingDisabled: boolean;
  error: string;
};

let initialState: initialStateType = {
  users: [],
  limitShowUsers: 4,
  usersShowed: -1,
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
    [getPartUsers.pending.type]: (state) => {
      state.isFetching = true;
    },
    [getPartUsers.fulfilled.type]: (
      state,
      action: PayloadAction<Array<ICommonProfile>>
    ) => {
      state.users = [...state.users, ...action.payload];
      state.usersShowed = state.users.length;
      state.isFetching = false;
    },
    [getPartUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
      state.isEmpty = true;
    },
  },
});

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;
