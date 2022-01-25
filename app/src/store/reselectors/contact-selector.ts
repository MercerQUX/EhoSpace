import { RootState } from "../store";

export const stateGetFriends = (state: RootState) => {
  return state.contactReducer.users;
};

export const stateIsFetching = (state: RootState) => {
  return state.contactReducer.isFetching;
};

export const stateContactError = (state:RootState) =>{
    return state.contactReducer.error;
}