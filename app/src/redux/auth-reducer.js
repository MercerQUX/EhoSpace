import {
  deleteLoggedDataAPI,
  indentifyLoginAPI,
  indentifyPasswordAPI,
  sendLoggedDataAPI,
} from "../API/auth-API";

const SET_LOGGED_DATA = "SET_LOGGED_DATA";
const RETURN_ERROR = "RETURN_ERROR";

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
        error: action.error
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
export const indentifyDataTC = (login, password) => (dispatch) => {
  indentifyLoginAPI(login).then((data) => {
    if (data === 0) {
      dispatch(returnErrorAC());
    } else {
      indentifyPasswordAPI(data.id, password).then((identifyPassword) => {
        if (identifyPassword) {
          sendLoggedDataAPI({ ...data, isAuth: true });
          dispatch(setLoggedDataAC({ ...data, isAuth: true, error:null }));
        } else {
          dispatch(returnErrorAC());
        }
      });
    }
  });
};

export const logOutTC = () => (dispatch) => {
  deleteLoggedDataAPI().then(() => {
    dispatch(setLoggedDataAC({ isAuth: false }));
  });
};

export default authReducer;
