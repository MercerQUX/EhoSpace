import { updateAuthProfile } from "./../thunks/profileThunks";
import { ICommonProfile } from "./../../models/ICommonProfile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type postsType = {
  id:number,
  body:string
}

interface initialStateProfileType {
  posts: Array<postsType>;
  profile: ICommonProfile | null;
  actualStatus: string;
  isFetching: boolean;
}

let initialState: initialStateProfileType = {
  posts: [
    {
      id: 1,
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam dignissimos explicabo ipsam. Deleniti obcaecati veritatis magnam et incidunt itaque. Nemo nihil provident iusto labore reprehenderit odit nisi accusantium non.
              acilis laborum incidunt. Voluptas, laboriosam! Doloremque perferendis ratione, at enim ut odit dolore numquam! Aliquam nam iste distinctio dicta, ducimus magni.`,
    },
    {
      id: 2,
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam dignissimos explicabo ipsam. Deleniti obcaecati veritatis magnam et incidunt itaque. Nemo nihil provident iusto labore reprehenderit odit nisi accusantium non.`,
    },
  ],
  profile: null,
  actualStatus: "",
  isFetching: false,
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
        },
      ];
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
      state.profile = action.payload;
    },
    [updateAuthProfile.rejected.type]: (state) => {
      state.isFetching = false;
    },
  },
});

export const profileAction = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
