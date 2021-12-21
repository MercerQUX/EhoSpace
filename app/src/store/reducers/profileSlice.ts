import {
  fetchPosts,
  updateAuthProfile,
  uploadPosts,
} from "../thunks/profile-thunk";
import { ICommonProfile } from "../../models/ICommonProfile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPosts } from "../../models/IPost";
import notAvatar from "../../asset/notAvatar.jpg";

interface initialStateProfileType {
  posts: Array<IPosts>;
  profile: ICommonProfile | null;
  actualStatus: string;
  isFetching: boolean;
  isOwner: boolean;
}

let initialState: initialStateProfileType = {
  posts: [],
  profile: null,
  actualStatus: "",
  isFetching: false,
  isOwner: false,
};

const profileSlice = createSlice({
  name: "profilePage",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<string>) {
      state.posts = [
        ...state.posts,
        {
          id: state.posts.length + 1,
          body: action.payload,
          timestamp: "",
        },
      ];
    },
    defineOwnerProfile(state, action: PayloadAction<number>) {
      state.isOwner = action.payload === state.profile?.id;
    },
    changeStatus(state, action: PayloadAction<string>) {
      //@ts-ignore
      state.profile.status = action.payload;
    },
    rewriteProfile(state, action: PayloadAction<ICommonProfile>) {
      state.profile = action.payload;
    },
  },
  extraReducers: {
    [updateAuthProfile.pending.type]: (state) => {
      state.isFetching = true;
    },
    [updateAuthProfile.fulfilled.type]: (
      state,
      action: PayloadAction<ICommonProfile>
    ) => {
      state.isFetching = false;
      if (action.payload.avatar === "") {
        state.profile = { ...action.payload, avatar: notAvatar };
      } else {
        state.profile = action.payload;
      }
    },
    [updateAuthProfile.rejected.type]: (state) => {
      state.isFetching = false;
    },
    [fetchPosts.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPosts[]>) => {
      state.isFetching = false;
      if (action.payload) {
        state.posts = action.payload;
      }
    },
    [fetchPosts.rejected.type]: (state) => {
      state.isFetching = false;
      state.posts = [];
    },
    [uploadPosts.fulfilled.type]: (state, action: PayloadAction<IPosts[]>) => {
      state.posts = action.payload;
    },
  },
});

export const profileAction = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
