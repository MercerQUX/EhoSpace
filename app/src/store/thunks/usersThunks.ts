import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getNumberTotalUsersAPI,
  getPartUsersAPI,
  rewriteUserAPI,
} from "./../../API/user-API";
import { ICommonProfile } from "../../models/ICommonProfile";

interface IThunkPayloadFetchUsers {
  page: number;
  limit: number;
  maxPage: number;
}
interface IThunkPayloadFetchFollowed {
  selectUsers: ICommonProfile;
  isFollowed: boolean;
}

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (payload: IThunkPayloadFetchUsers, thunkAPI) => {
    const { page, limit, maxPage } = payload;
    try {
      if (page === maxPage + 1) {
        throw Error;
      }
      const response = await getPartUsersAPI(page, limit);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);

export const fetchFullCountUsers = createAsyncThunk(
  "users/fetchCountUsers",
  async (_, thunkAPI) => {
    try {
      const response = await getNumberTotalUsersAPI();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);

export const fetchFollow = createAsyncThunk(
  "users/fetchFollow",
  async (payload: IThunkPayloadFetchFollowed, thunkAPI) => {
    const { isFollowed, selectUsers } = payload;
    try {
      if (selectUsers.id === undefined) {
        throw new SyntaxError("DataType: data not initialization");
      }
      await rewriteUserAPI(selectUsers.id, {
        ...selectUsers,
        followed: isFollowed,
      });
      return {isFollowed,id:selectUsers.id}
    } catch (e) {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);
