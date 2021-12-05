import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getNumberTotalUsersAPI,
  getPartUsersAPI,
  rewriteUserAPI,
} from "../../APIs/user-API";
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
  