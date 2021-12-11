import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchShortProfile } from "../../services/DB/FetchProfile";

export const fetchArrayFollowUsers = createAsyncThunk(
  "dialogs/FetchArray",
  async (payload: number[], thunkAPI) => {
    const shortProfiles = await fetchShortProfile(Object.values(payload));
    return shortProfiles;
  }
);
