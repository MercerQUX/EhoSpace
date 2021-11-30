import { indentifyEnteredData, authLogOut } from "./../thunks/authThunks";
import { IDataAuth } from "../../models/IDataAuth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { actualLoggedUser } from "../thunks/authThunks";

type initialStateType = IDataAuth;

let initialState: initialStateType = {
  id: 0,
  email: "",
  login: "",
  isAuth: false,
  error: "",
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    // Rewrite the state for the actual data for the user who was authorized;
    // setLoggedData(state, action: PayloadAction<initialStateType>) {
    //   state = action.payload;
    // },
  },
  extraReducers: {
    [actualLoggedUser.fulfilled.type]: (
      state,
      action: PayloadAction<IDataAuth>
    ) => {
      return { ...state, ...action.payload };
    },
    [actualLoggedUser.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
    },

    [indentifyEnteredData.fulfilled.type]: (
      state,
      action: PayloadAction<IDataAuth>
    ) => {
      return { ...state, ...action.payload, isAuth: true, error: "" };
    },
    [indentifyEnteredData.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
    },

    [authLogOut.fulfilled.type]: (state) => {
      const resetLogginAuth = {
        id: 0,
        email: "",
        login: "",
        isAuth: false,
        error: "",
      };
      return { ...state, ...resetLogginAuth };
    },
    [authLogOut.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const authAction = authSlice.actions;

export const authReducer = authSlice.reducer;