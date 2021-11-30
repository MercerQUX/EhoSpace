import { RootState } from "../store";

export const getAuthID = (state: RootState) => {
  return state.authReducer.id;
};
export const getAuthLogin = (state: RootState) => {
  return state.authReducer.login;
};
export const getAuthError = (state: RootState) => {
  return state.authReducer.error;
};
export const getAuthEmail = (state: RootState) => {
  return state.authReducer.email;
};
export const isAuthInitialization = (state: RootState) => {
  return state.authReducer.isAuth;
};
