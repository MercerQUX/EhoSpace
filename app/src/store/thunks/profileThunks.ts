import { ICommonProfile } from "../../models/ICommonProfile";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleUserAPI } from "../../APIs/profile-API";
import { rewriteUserAPI } from "../../APIs/user-API";
import { fetchSingleProfile } from "../../services/DB/FetchProfile";
export interface IThunkUpdateProfile {
  selectUserID: number;
  loggedID: number;
  isAuth: boolean;
}
export interface IThunkRewriteProfile {
  id: number;
  updateProfile: ICommonProfile;
}

export const updateAuthProfile = createAsyncThunk(
  "profile/updateAuthProfile",
  async (payload: IThunkUpdateProfile, thunkAPI) => {
    try {
      const { selectUserID, loggedID, isAuth } = payload;
      let selectedUser =
        isNaN(selectUserID) && isAuth ? loggedID : selectUserID;
      const response = await fetchSingleProfile(selectedUser);
      return Object.values(response)[0];
    } catch (e) {
      return thunkAPI.rejectWithValue("User not found");
    }
  }
);

export const sendRewriteProfile = createAsyncThunk(
  "profile/rewriteProfile",
  async (payload: IThunkRewriteProfile, thunkAPI) => {
    const { id, updateProfile } = payload;
    try {
      await rewriteUserAPI(id, updateProfile);
    } catch (e) {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);
