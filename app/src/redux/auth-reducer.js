import {
  deleteLoggedDataAPI,
  getLoggedDataAPI,
  indentifyLoginAPI,
  indentifyPasswordAPI,
  sendLoggedDataAPI,
} from "../API/auth-API";

const SET_LOGGED_DATA = "auth/SET_LOGGED_DATA";
const RETURN_ERROR = "auth/RETURN_ERROR";

let initState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  error: null,
};

const authReducer = (state = initState, action) => {
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
// ACTIONS CREATOR
export const setLoggedDataAC = (data) => ({
  type: SET_LOGGED_DATA,
  data: data,
});
export const returnErrorAC = () => ({
  type: RETURN_ERROR,
});
// THUNKS CREATOR
export const actualLoggedUserTC = () => async (dispatch) => {
  let data = await getLoggedDataAPI();
  if (data != undefined) {
    dispatch(setLoggedDataAC(data));
  }
};

export const indentifyDataTC = (login, password) => async (dispatch) => {
  let data = await indentifyLoginAPI(login);
  data === 0
    ? dispatch(returnErrorAC())
    : dispatch(indentifyPasswordTC(data, password));
};

export const indentifyPasswordTC = (data, password) => async (dispatch) => {
  let identifyPassword = await indentifyPasswordAPI(data.id, password);
  if (identifyPassword) {
    sendLoggedDataAPI({ ...data, isAuth: true });
    dispatch(setLoggedDataAC({ ...data, isAuth: true, error: null }));
  } else {
    dispatch(returnErrorAC());
  }
};

export const logOutTC = () => async (dispatch) => {
  await deleteLoggedDataAPI();
  dispatch(setLoggedDataAC({ isAuth: false }));
};

export default authReducer;
