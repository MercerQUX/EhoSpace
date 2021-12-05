import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  get,
  getDatabase,
  limitToFirst,
  onValue,
  orderByKey,
  query,
  ref,
  startAfter,
} from "firebase/database";
import {
  getNumberTotalUsersAPI,
  getPartUsersAPI,
  rewriteUserAPI,
} from "../../APIs/user-API";
import { ICommonProfile } from "../../models/ICommonProfile";

interface IThunkPayloadFetchUsers {
  limit: number;
  startFrom: number;
}
interface IThunkPayloadFetchFollowed {
  selectUsers: ICommonProfile;
  isFollowed: boolean;
}

export const getPartUsers = createAsyncThunk(
  "users/getPartUsers",
  async (payload: IThunkPayloadFetchUsers, thunkAPI) => {
    const { limit, startFrom } = payload;
    const openDB = getDatabase();
    const ss = query(
      ref(openDB, "users"),
      orderByKey(),
      startAfter(String(startFrom)),
      limitToFirst(limit)
    );
    return await get(ss).then((res) => {
      return Object.values(res.exportVal());
    });
  }
);
