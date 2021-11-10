import {
  deleteLoggedDataAPI,
  getLoggedDataAPI,
  indentifyLoginAPI,
  indentifyPasswordAPI,
  sendLoggedDataAPI,
} from "../API/auth-API";
import { dataLoggedType } from "./reducersTypes";

const SET_LOGGED_DATA = "auth/SET_LOGGED_DATA";
const RETURN_ERROR = "auth/RETURN_ERROR";

type initialStateType = {
  userID: null | number;
  email: null | string;
  login: null | string;
  isAuth: boolean;
  error: null | string;
};

let initState: initialStateType = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  error: null,
};

const authReducer = (state = initState, action: any): initialStateType => {
  switch (action.type) {
    case SET_LOGGED_DATA:
      return {
        ...state,
        login: action.data.login,
        email: action.data.email,
        isAuth: action.data.isAuth,
        userID: action.data.id,
        error: action.error,
      };
    case RETURN_ERROR:
      return {
        ...state,
        isAuth: state.isAuth,
        error: "Error: The username or password was entered incorrectly",
      };
    default:
      return state;
  }
};
// TYPES 

type setLoggedDataAT = {
  type: typeof SET_LOGGED_DATA;
  data: dataLoggedType;
};
type returnErrorAT = () => {
  type: typeof RETURN_ERROR;
};

// ACTIONS CREATOR
export const setLoggedDataAC = (data: dataLoggedType): setLoggedDataAT => ({
  type: SET_LOGGED_DATA,
  data: data,
});
export const returnErrorAC: returnErrorAT = () => ({
  type: RETURN_ERROR,
});

// THUNKS CREATOR
export const actualLoggedUserTC = () => async (dispatch: any) => {
  let data = await getLoggedDataAPI();
  if (data != undefined) {
    dispatch(setLoggedDataAC({ ...data }));
  }
};

export const indentifyDataTC =
  (login: string, password: string) => async (dispatch: any) => {
    let data = await indentifyLoginAPI(login);
    data === 0
      ? dispatch(returnErrorAC())
      : dispatch(indentifyPasswordTC(data, password));
  };

export const indentifyPasswordTC =
  (data: any, password: string) => async (dispatch: any) => {
    let identifyPassword = await indentifyPasswordAPI(data.id, password);
    if (identifyPassword) {
      sendLoggedDataAPI({ ...data, isAuth: true });
      dispatch(setLoggedDataAC({ ...data, isAuth: true, error: null }));
    } else {
      dispatch(returnErrorAC());
    }
  };

export const logOutTC = () => async (dispatch: any) => {
  await deleteLoggedDataAPI();
  dispatch(
    setLoggedDataAC({
      userID: null,
      email: null,
      login: null,
      isAuth: false,
      error: "Your not logged",
    })
  );
};

export default authReducer;
