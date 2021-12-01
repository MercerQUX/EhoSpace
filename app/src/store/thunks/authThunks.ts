import {
  deleteLoggedDataAPI,
  indentifyLoginAPI,
  indentifyPasswordAPI,
  sendLoggedDataAPI,
} from "./../../API/auth-API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLoggedDataAPI } from "../../API/auth-API";

interface IThunkIndentifyData {
  login: string;
  password: string;
}

export const actualLoggedUser = createAsyncThunk(
  "auth/actualLoggedUser",
  async (_, thunkAPI) => {
    try {
      let response = await getLoggedDataAPI();
      if (response.login === null) {
        throw new Error("AuthTypeError: unauthorized user ");
      }
      return response;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const indentifyEnteredData = createAsyncThunk(
  "auth/identifyData",
  async (payload: IThunkIndentifyData, thunkAPI) => {
    const { login, password } = payload;
    debugger;
    const localError = new Error(
      "Error: The username or password was entered incorrectly"
    );
    try {
      let response = await indentifyLoginAPI(login);
      if (response === 0) {
        throw localError;
      }
      let isCorrectlyPassword = await indentifyPasswordAPI(
        response.id,
        password
      );
      if (isCorrectlyPassword) {
        await sendLoggedDataAPI({ ...response,isAuth:true });
        return response;
      } else {
        throw localError;
      }
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authLogOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await deleteLoggedDataAPI();
  } catch (e) {
    return thunkAPI.rejectWithValue("Server rejected");
  }
});
