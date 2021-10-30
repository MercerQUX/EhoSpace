const SET_LOGGED_DATA = "SET_LOGGED_DATA";

let initState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOGGED_DATA:
      console.log(action.data);
      return {
        ...state,
        login: action.data.login,
        email: action.data.email,
        isAuth: action.data.isAuth,
        userID: action.data.id,
      };
    default:
      return state;
  }
};

export const setLoggedDataAC = (data) => ({
  type: SET_LOGGED_DATA,
  data: data,
});

export default authReducer;
