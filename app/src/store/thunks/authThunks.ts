import { userAction } from "./../reducers/userSlice";
import { getByUID } from "./../../services/DB/SignInDB";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleLoginDB } from "../../services/DB/SignInDB";
import { handleRegisterDB } from "../../services/DB/SignUpDB";
import { getAuth, signOut } from "firebase/auth";
import { ISignIn, ISignUp } from "../../models/ISigns";
import {
  validateLoginDB,
  validateEmailDB,
} from "../../services/DB/validRegisterDB";
import { fetchArrayFollowUsers } from "./dialogsThunks";

export const signInProfile = createAsyncThunk(
  "auth/signIn",
  async (payload: ISignIn, thunkAPI) => {
    const { email_login, password } = payload;
    try {
      const getUser = await handleLoginDB({ email_login, password });
      const uid = await getByUID(getUser.user.displayName);
      return { login: getUser.user.displayName, id: uid };
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Warning: Incorrect data  user login or password"
      );
    }
  }
);

export const signUpProfile = createAsyncThunk(
  "auth/signUp",
  async (payload: ISignUp, thunkAPI) => {
    try {
      const validLogin = await validateLoginDB(payload.login);
      const validEmail = await validateEmailDB(payload.email);
      if (validLogin && validEmail) {
        await handleRegisterDB({ ...payload });
      } else {
        throw Error;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Warning: There was a data failure, perhaps you entered data that already exists?"
      );
    }
  }
);

export const signOutProfile = createAsyncThunk(
  "auth/SignOut",
  async (_, thunkAPI) => {
    const { setFriends } = userAction;
    await signOut(getAuth());
    await thunkAPI.dispatch(setFriends([]));
    await thunkAPI.dispatch(fetchArrayFollowUsers([]));
  }
);