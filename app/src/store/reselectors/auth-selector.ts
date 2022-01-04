import { RootState } from "../store";

export const stateAuthID = (state: RootState) => {
  return state.authReducer.id;
};
export const stateAuthLogin = (state: RootState) => {
  return state.authReducer.login;
};
export const stateAuthIsLoading = (state: RootState) => {
  return state.authReducer.isLoading;
};
export const stateAuthError = (state: RootState) => {
  return state.authReducer.error;
};
export const stateAuthIsInitialization = (state: RootState) => {
  return state.authReducer.isAuth;
};
