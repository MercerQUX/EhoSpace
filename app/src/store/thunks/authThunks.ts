import { getByUID } from "./../../services/DB/SignInDB";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleLoginDB } from "../../services/DB/SignInDB";
interface ISignIn {
  email_login: string;
  password: string;
}

export const signInProfile = createAsyncThunk(
  "auth/signUp",
  async (payload: ISignIn, thunkAPI) => {
    const { email_login, password } = payload;
    try {
      const getUser = await handleLoginDB({ email_login, password });
      const uid = await getByUID(getUser.user.displayName);
      return { login: getUser.user.displayName, id: uid };
    } catch (e) {
      return thunkAPI.rejectWithValue("Warning: Incorrect data");
    }
  }
);