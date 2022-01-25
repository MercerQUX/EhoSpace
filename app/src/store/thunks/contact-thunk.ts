import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchShortProfileDB } from "../../services/DB/fetchProfileDB";

export const getFriends = createAsyncThunk(
  "getFriends",
  async (
    payload: Array<number>,
    thunkAPI: { getState: any; rejectWithValue: any }
  ) => {
    try {
      let newArray = await fetchShortProfileDB(payload);
      return newArray;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Error 501: An error occurred while loading data. Refresh the page or check authorization."
      );
    }
  }
);
