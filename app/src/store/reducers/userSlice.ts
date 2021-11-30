import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICommonProfile } from "../../models/ICommonProfile";
import { fetchFollow, fetchFullCountUsers, fetchUsers } from '../thunks/usersThunks';

export type initialStateType = {
  users: Array<ICommonProfile>;
  pageSize: number;
  totalUsersCount: number;
  numLoadedPages: number;
  isFetching: boolean;
  isEmpty: boolean;
  isFollowingDisabled: boolean;
  error: string;
};

let initialState: initialStateType = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  numLoadedPages: 1,
  isFetching: false,
  isEmpty: false,
  isFollowingDisabled: false,
  error: "",
};

const userSlice = createSlice({
    name:"userPage",
    initialState,
    reducers:{
        following(state, action: PayloadAction<{ id: number; followed: boolean }>) {
            const {
              payload: { id, followed },
            } = action;
            state.users = state.users.map((u) =>
              u.id === id ? { ...u, followed: followed } : u
            );
          },
    },
    extraReducers:{
        [fetchUsers.pending.type]: (state) => {
            state.isFetching = true;
          },
          [fetchUsers.fulfilled.type]: (
            state,
            action: PayloadAction<Array<ICommonProfile>>
          ) => {
            const whatPageNow =
              state.totalUsersCount / (state.pageSize + 1) > state.numLoadedPages;
            state.users = [...state.users, ...action.payload];
            if (whatPageNow) {
              state.numLoadedPages = state.numLoadedPages + 1;
            } else {
              state.isEmpty = true;
            }
            state.isFetching = false;
          },
          [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isFetching = false;
            state.error = action.payload;
          },

          [fetchFullCountUsers.fulfilled.type]: (
            state,
            action: PayloadAction<number>
          ) => {
            state.totalUsersCount = action.payload-1;
          },
          [fetchFullCountUsers.rejected.type]: (
            state,
            action: PayloadAction<string>
          ) => {
            state.error = action.payload;
          },
    
          [fetchFollow.pending.type]: (state) => {
            state.isFollowingDisabled = true;
          },
          [fetchFollow.fulfilled.type]: (state) => {
            state.isFollowingDisabled = false;
          },
          [fetchFollow.rejected.type]: (state) => {
            state.isFollowingDisabled = false;
          },
    }
})

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;