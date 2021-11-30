import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAppDispatch } from "./../../hooks/redux-use";
import {
  getNumberTotalUsersAPI,
  getPartUsersAPI,
  rewriteUserAPI,
} from "./../../API/user-API";
import { ICommonProfile } from "../../models/ICommonProfile";

interface IThunkPayloadFetchUsers {
  page: number;
  limit: number;
}
interface IThunkPayloadFetchFollowed {
  selectUsers: ICommonProfile;
  isFollowed: boolean;
}

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (payload: IThunkPayloadFetchUsers, thunkAPI) => {
    try {
      const response = await getPartUsersAPI(payload.page, payload.limit);
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
      // dispatch(
      //   userAction.following({
      //     id: selectUsers.id,
      //     followed: isFollowed,
      //   }))
      await rewriteUserAPI(selectUsers.id, {
        ...selectUsers,
        followed: isFollowed,
      });
    } catch (e) {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);
