import { IShortProfile } from "./../../models/IShortProfile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFriends } from "../thunks/contact-thunk";

export type initialStateType = {
  users: Array<IShortProfile>;
  isFetching: boolean;
  error: String;
};

let initialState: initialStateType = {
  users: [],
  isFetching: true,
  error: "",
};

const contactSlice = createSlice({
  name: "contactPage",
  initialState,
  reducers: {},
  extraReducers: {
    [getFriends.fulfilled.type]: (
      state,
      action: PayloadAction<Array<IShortProfile>>
    ) => {
      state.users = [...action.payload];
      state.isFetching = false;
    },
    [getFriends.pending.type]: (state) => {
      state.isFetching = true;
    },
    [getFriends.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isFetching = false;
    },
  },
});

export const contactAction = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
