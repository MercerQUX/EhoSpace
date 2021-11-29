import { ICommonProfile } from "./../../models/ICommonProfile";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleUserAPI } from "../../API/profile-API";
import { rewriteUserAPI } from "../../API/user-API";
interface IThunkUpdateProfile {
  id: number;
  loggedID: number;
  isAuth: boolean;
}
interface IThunkRewriteProfile {
  id: number;
  updateProfile: ICommonProfile;
}

export const updateAuthProfile = createAsyncThunk(
  "profile/updateAuthProfile",
  async (payload: IThunkUpdateProfile, thunkAPI) => {
    try {
      const { id, loggedID, isAuth } = payload;
      let selectedUser = id == undefined && isAuth ? loggedID : id;
      let response = await getSingleUserAPI(selectedUser);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);

export const sendRewriteProfile = createAsyncThunk(
  "profile/rewriteProfile",
  async (payload: IThunkRewriteProfile, thunkAPI) => {
    const { id, updateProfile } = payload;
    try {
      await rewriteUserAPI({ id: id, user: updateProfile });
    } catch (e) {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);
