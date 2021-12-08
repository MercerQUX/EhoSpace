import { ICommonProfile } from "../../models/ICommonProfile";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleProfile } from "../../services/DB/FetchProfile";
import { rewriteProfile } from "../../services/DB/RewriteProfile";
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
  async (
    payload: IThunkRewriteProfile,
    thunkAPI: { getState: any; rejectWithValue: any }
  ) => {
    const { id, updateProfile } = payload;
    try {
      await rewriteProfile(id, updateProfile);
    } catch (e) {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);
