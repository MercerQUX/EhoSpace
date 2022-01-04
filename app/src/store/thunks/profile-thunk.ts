import { fetchPostsDB, uploadPostsDB } from "../../services/DB/postsDB";
import { ICommonProfile } from "../../models/ICommonProfile";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleProfileDB } from "../../services/DB/fetchProfileDB";
import { rewriteProfile } from "../../services/DB/rewriteProfileDB";
import { format } from "date-fns";
export interface IThunkRewriteProfile {
  id: number;
  updateProfile: ICommonProfile;
}

export const updateAuthProfile = createAsyncThunk(
  "profile/updateAuthProfile",
  async (payload: number, thunkAPI) => {
    try {
      const response = await fetchSingleProfileDB(payload);
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
      await rewriteProfile(id, updateProfile);
    } catch (e) {
      return thunkAPI.rejectWithValue("Server rejected");
    }
  }
);

export const fetchPosts = createAsyncThunk(
  "profile/fetchPost",
  async (payload: number, thunkAPI) => {
    try {
      return await fetchPostsDB(payload);
    } catch (e) {}
  }
);

export const uploadPosts = createAsyncThunk(
  "profile/uploadPost",
  async (payload: string, thunkAPI: { getState: any }) => {
    let newPost = {
      id: thunkAPI.getState().profileReducer.posts.length + 1,
      body: payload,
      timestamp: format(new Date(), "PPP p OOOO"),
    };
    let concatPosts = [...thunkAPI.getState().profileReducer.posts, newPost];
    await uploadPostsDB({
      id: thunkAPI.getState().authReducer.id,
      newPost: concatPosts,
    });

    try {
      return concatPosts;
    } catch (error) {}
  }
);
