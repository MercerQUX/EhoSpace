import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchShortProfile } from "../../services/DB/FetchProfile";

export const fetchArrayFollowUsers = createAsyncThunk(
  "dialogs/FetchArray",
  async (payload: number[], thunkAPU: { getState: any }) => {
    const ss = await fetchShortProfile(payload);
    return ss;
  }
);
