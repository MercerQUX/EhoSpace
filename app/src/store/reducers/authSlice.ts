import { IDataAuth } from "../../models/IDataAuth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  signInProfile,
  signOutProfile,
  signUpProfile,
} from "../thunks/auth-thunk";

type initialStateType = IDataAuth;
type signInProfileType = {
  id: number;
  login: string;
};
type initializeType = {
  login: string | null;
  isAuth: boolean;
  id: number;
};

let initialState: initialStateType = {
  isAuth: false,
  id: 0,
  login: "",
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    initializeAuthProfile(state, action: PayloadAction<initializeType>) {
      const { login, isAuth, id } = action.payload;
      state.isAuth = isAuth;
      state.login = login;
      state.id = id;
    },
  },
  extraReducers: {
    [signInProfile.fulfilled.type]: (
      state,
      action: PayloadAction<signInProfileType>
    ) => {
      state.login = action.payload.login;
      state.id = action.payload.id;
      state.isAuth = true;
      state.error = "";
      state.isLoading = false;
    },
    [signInProfile.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signInProfile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [signUpProfile.fulfilled.type]: (state) => {
      state.error = "";
      state.isLoading = false;
    },
    [signUpProfile.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signUpProfile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [signOutProfile.fulfilled.type]: (state) => {
      state.login = "";
      state.id = 0;
      state.isAuth = false;
      state.error = "";
    },
  },
});

export const authAction = authSlice.actions;

export const authReducer = authSlice.reducer;
