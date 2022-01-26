import {
  deletePosts,
  editPosts,
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
  selectPost: IPosts;
  profile: ICommonProfile | null;
  actualStatus: string;
  isFetching: boolean;
  isOwner: boolean;
  errorLoading: boolean;
}

let initialState: initialStateProfileType = {
  posts: [],
  selectPost: {
    body: "",
    timestamp: "",
    id: 0,
  },
  profile: null,
  actualStatus: "",
  isFetching: false,
  isOwner: false,
  errorLoading: false,
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
    installSelectPost(state, action: PayloadAction<number>) {
      state.selectPost = state.posts.filter(
        (post) => post.id === action.payload
      )[0];
    },
  },
  extraReducers: {
    [updateAuthProfile.pending.type]: (state) => {
      state.isFetching = true;
      state.errorLoading = false;
    },
    [updateAuthProfile.fulfilled.type]: (
      state,
      action: PayloadAction<ICommonProfile>
    ) => {
      state.errorLoading = false;
      if (action.payload !== undefined) {
        if (action.payload.avatar === "") {
          state.profile = { ...action.payload, avatar: notAvatar };
        } else {
          state.profile = { ...action.payload };
        }
      }else{
        state.profile = null;
        state.errorLoading = true;
      }
      state.isFetching = false;
    },
    [updateAuthProfile.rejected.type]: (state) => {
      state.errorLoading = true;
      state.isFetching = false;
    },
    [fetchPosts.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPosts[]>) => {
      state.isFetching = false;
      if (action.payload) {
        state.posts = action.payload;
      } else {
        state.posts = [];
      }
    },
    [fetchPosts.rejected.type]: (state) => {
      state.isFetching = false;
      state.posts = [];
    },
    [uploadPosts.fulfilled.type]: (state, action: PayloadAction<IPosts[]>) => {
      state.posts = action.payload;
    },
    [deletePosts.pending.type]: (state) => {
      state.isFetching = true;
    },
    [deletePosts.fulfilled.type]: (state, action: PayloadAction<IPosts[]>) => {
      state.posts = action.payload;
      state.isFetching = false;
    },
    [deletePosts.rejected.type]: (state) => {
      state.isFetching = false;
    },
    [editPosts.pending.type]: (state) => {
      state.isFetching = true;
    },
    [editPosts.fulfilled.type]: (state, action: PayloadAction<IPosts[]>) => {
      state.posts = action.payload;
      state.isFetching = false;
    },
    [editPosts.rejected.type]: (state) => {
      state.isFetching = false;
    },
  },
});

export const profileAction = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
