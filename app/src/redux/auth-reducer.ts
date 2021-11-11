import { AuthActionType } from "./auth-creators";

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

const authReducer = (
  state = initState,
  action: AuthActionType
): initialStateType => {
  switch (action.type) {
    case SET_LOGGED_DATA:
      return {
        ...state,
        login: action.data.login,
        email: action.data.email,
        isAuth: action.data.isAuth,
        userID: action.data.id,
        error: action.data.error,
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

export default authReducer;
