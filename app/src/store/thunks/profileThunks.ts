import { ICommonProfile } from "../../models/ICommonProfile";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleUserAPI } from "../../APIs/profile-API";
import { rewriteUserAPI } from "../../APIs/user-API";
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
      await rewriteUserAPI(id, updateProfile );
    } catch (e) {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);
