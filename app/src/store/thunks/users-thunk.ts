import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  set,
  startAfter,
} from "firebase/database";

interface IThunkPayloadFollowed {
  id: number;
  isFollow: boolean;
}

export const getPartUsers = createAsyncThunk(
  "users/getPartUsers",
  async (_, thunkAPI: { getState: any; rejectWithValue: any }) => {
    const state = thunkAPI.getState().userReducer;
    const getUsers = query(
      ref(getDatabase(), "users"),
      orderByKey(),
      startAfter(String(state.usersShowed)),
      limitToFirst(state.limitShowUsers)
    );
    try {
      return await get(getUsers).then((res) => {
        return Object.values(res.exportVal());
      });
    } catch (e) {
      return thunkAPI.rejectWithValue(
        state.users.length === 0
          ? "Error 500: Pls reload page or click this button"
          : "Warning: Users not found"
      );
    }
  }
);

export const setFollowed = createAsyncThunk(
  "users/setFollowed",
  async (payload: IThunkPayloadFollowed, thunkAPI: { getState: any }) => {
    const { id, isFollow } = payload;
    const state = thunkAPI.getState();
    const newFollowing = isFollow
      ? state.userReducer.following.filter((idFollowed: number) => {
          return idFollowed !== id;
        })
      : [...state.userReducer.following, id];
    const reference = ref(
      getDatabase(),
      `innerData/${state.authReducer.login}/following`
    );
    await set(reference, newFollowing);
    return newFollowing;
  }
);
