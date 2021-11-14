import { RootState } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import {
  deleteLoggedDataAPI,
  getLoggedDataAPI,
  indentifyLoginAPI,
  indentifyPasswordAPI,
  sendLoggedDataAPI,
} from "../API/auth-API";
import { dataLoggedType } from "./types/ReducersTypes";

const SET_LOGGED_DATA = "auth/SET_LOGGED_DATA";
const RETURN_ERROR = "auth/RETURN_ERROR";

// TYPES
export type AuthActionType = setLoggedDataAT | returnErrorAT;

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, AuthActionType>;
type setLoggedDataAT = {
  type: typeof SET_LOGGED_DATA;
  data: dataLoggedType;
};
type returnErrorAT = {
  type: typeof RETURN_ERROR;
};

// ACTIONS CREATOR
export const setLoggedDataAC = (data: dataLoggedType): setLoggedDataAT => ({
  type: SET_LOGGED_DATA,
  data: data,
});
export const returnErrorAC = (): returnErrorAT => ({
  type: RETURN_ERROR,
});

// THUNKS CREATOR
export const actualLoggedUserTC = (): ThunkType => async (dispatch) => {
  let data = await getLoggedDataAPI();
  if (data != undefined) {
    dispatch(
      setLoggedDataAC({
        id: data.id,
        email: data.email,
        login: data.login,
        isAuth: data.isAuth,
        error: null,
      })
    );
  }
};

export const indentifyDataTC =
  (login: string, password: string): ThunkType =>
  async (dispatch) => {
    let data = await indentifyLoginAPI(login);
    data === 0
      ? dispatch(returnErrorAC())
      : dispatch(indentifyPasswordTC(data, password));
  };

export const indentifyPasswordTC =
  (data: dataLoggedType, password: string): ThunkType =>
  async (dispatch) => {
    let identifyPassword = await indentifyPasswordAPI(data.id, password);
    if (identifyPassword) {
      console.log("OKEY");
      sendLoggedDataAPI({ ...data, isAuth: true });
      dispatch(setLoggedDataAC({ ...data, isAuth: true, error: null }));
    } else {
      console.log("Scram");
      dispatch(returnErrorAC());
    }
  };

export const logOutTC = (): ThunkType => async (dispatch) => {
  await deleteLoggedDataAPI();
  dispatch(
    setLoggedDataAC({
      id: null,
      email: null,
      login: null,
      isAuth: false,
      error: null,
    })
  );
};
