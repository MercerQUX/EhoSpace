import { RootState } from "../store";

export const getPosts = (state: RootState) => {
  return state.profileReducer.posts;
};

export const getActualStatus = (state: RootState) => {
  return state.profileReducer.actualStatus;
};

export const getIsOwnerProfile = (state:RootState)=>{
  return state.profileReducer.isOwner;
}

export const isFetchingProfile = (state: RootState) => {
  return state.profileReducer.isFetching;
};

export const getProfile = (state: RootState) => {
  return state.profileReducer.profile;
};
