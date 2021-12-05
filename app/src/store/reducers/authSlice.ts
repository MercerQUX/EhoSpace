import { IDataAuth } from "../../models/IDataAuth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { signInProfile } from "../thunks/authThunks";

type initialStateType = IDataAuth;
type signInProfile = {
  id: number;
  login: string;
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
  reducers: {},
  extraReducers: {
    [signInProfile.fulfilled.type]: (state, action: PayloadAction<signInProfile>) => {
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
  },
});

export const authAction = authSlice.actions;

export const authReducer = authSlice.reducer;
