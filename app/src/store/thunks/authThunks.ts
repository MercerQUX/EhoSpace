import { getByUID } from "./../../services/DB/SignInDB";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleLoginDB } from "../../services/DB/SignInDB";
import { handleRegisterDB } from "../../services/DB/SignUpDB";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
interface ISignIn {
  email_login: string;
  password: string;
}

interface ISignUp {
  name: string;
  surname: string;
  country: string;
  email: string;
  login: string;
  password: string;
}

export const signInProfile = createAsyncThunk(
  "auth/signIn",
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

export const signUpProfile = createAsyncThunk(
  "auth/signUp",
  async (payload: ISignUp, thunkAPI) => {
    try {
      await handleRegisterDB({ ...payload });
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
    await signOut(getAuth());
  }
);

export const initializeAuthProfile = createAsyncThunk(
  "auth/initAuthProfile",
  async (_, thunkAPI) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      debugger;
      if (user !== null) {
      } else {
      }
    });
    return { isAuth: false, login: auth.currentUser?.displayName };
  }
);
