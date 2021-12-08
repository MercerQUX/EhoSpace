import { fetchPostsDB, uploadPostsDB } from "./../../services/DB/PostsDB";
import { ICommonProfile } from "../../models/ICommonProfile";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleProfile } from "../../services/DB/FetchProfile";
import { rewriteProfile } from "../../services/DB/RewriteProfile";
export interface IThunkRewriteProfile {
  id: number;
  updateProfile: ICommonProfile;
}

export const updateAuthProfile = createAsyncThunk(
  "profile/updateAuthProfile",
  async (payload: number, thunkAPI) => {
    try {
      const response = await fetchSingleProfile(payload);
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

export const fetchPosts = createAsyncThunk(
  "profile/fetchPost",
  async (payload: number, thunkAPI) => {
    return await fetchPostsDB(payload);
  }
);

export const uploadPosts = createAsyncThunk(
  "profile/uploadPost",
  async (payload: string, thunkAPI: { getState: any }) => {
    let newPost = {
      id: thunkAPI.getState().profileReducer.posts.length + 1,
      body: payload,
      timestamp: "00:00:00 01/01/22",
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
