import { RootState } from "./../store";
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

interface IThunkPayloadFetchUsers {
  limit: number;
  startFrom: number;
}
interface IThunkPayloadFollowed {
  id: number;
  isFollow: boolean;
}

export const getPartUsers = createAsyncThunk(
  "users/getPartUsers",
  async (_, thunkAPI: { getState: any }) => {
    const state = thunkAPI.getState().userReducer;
    const getUsers = query(
      ref(getDatabase(), "users"),
      orderByKey(),
      startAfter(String(state.usersShowed)),
      limitToFirst(state.limitShowUsers)
    );
    return await get(getUsers).then((res) => {
      return Object.values(res.exportVal());
    });
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
