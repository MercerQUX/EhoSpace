import { indentifyEnteredData, logOut } from "./../thunks/authThunks";
import { IDataAuth } from "../../models/IDataAuth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { actualLoggedUser } from "../thunks/authThunks";

type initialStateType = IDataAuth;

let initialState: initialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  error: null,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    //Rewrite the state for the actual data for the user who was authorized;
    setLoggedData(state, action: PayloadAction<initialStateType>) {
      state = action.payload;
    },
  },
  extraReducers: {
    [actualLoggedUser.fulfilled.type]: (
      state,
      action: PayloadAction<IDataAuth>
    ) => {
      state = action.payload;
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
      state = { ...action.payload, error: null };
    },
    [indentifyEnteredData.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
    },

    [logOut.fulfilled.type]: (state) => {
      state = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        error: null,
      };
    },
    [logOut.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
