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
      if (response.isAuth === false) {
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
        await sendLoggedDataAPI({ ...response });
        return response;
      } else {
        throw localError;
      }
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const logOutTC = (): AuthThunkType => async (dispatch) => {
//   await deleteLoggedDataAPI();
//   dispatch(
//     setLoggedDataAC({
//       id: null,
//       email: null,
//       login: null,
//       isAuth: false,
//       error: null,
//     })
//   );
// };

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await deleteLoggedDataAPI();
  } catch (e) {
    return thunkAPI.rejectWithValue("Server rejected");
  }
});
