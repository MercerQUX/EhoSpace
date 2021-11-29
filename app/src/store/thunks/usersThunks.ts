import { usersSlice } from "./../reducers/usersSlice";
import { useAppDispatch } from "./../../hooks/redux-use";
import {
  getNumberTotalUsersAPI,
  getPartUsersAPI,
  rewriteUserAPI,
} from "./../../API/user-API";
import { createAsyncThunk } from "@reduxjs/toolkit";
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
    } catch {
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
    } catch {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);

export const fetchFollow = createAsyncThunk(
  "users/fetchFollow",
  async (payload: IThunkPayloadFetchFollowed, thunkAPI) => {
    const { isFollowed, selectUsers } = payload;
    const dispatch = useAppDispatch();
    try {
      if (selectUsers.id === undefined) {
        throw new SyntaxError("DataType: data not initialization");
      }
      dispatch(
        usersSlice.actions.following({
          id: selectUsers.id,
          followed: isFollowed,
        })
      );
      await rewriteUserAPI({
        id: selectUsers.id,
        user: {
          ...selectUsers,
          followed: isFollowed,
        },
      });
    } catch {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);
