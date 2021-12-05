import { RootState } from "../store";

export const getAuthID = (state: RootState) => {
  return state.authReducer.id;
};
export const getAuthLogin = (state: RootState) => {
  return state.authReducer.login;
};
export const getAuthIsLoading = (state: RootState) => {
  return state.authReducer.isLoading;
};
export const getAuthError = (state: RootState) => {
  return state.authReducer.error;
};
export const isAuthInitialization = (state: RootState) => {
  return state.authReducer.isAuth;
};
