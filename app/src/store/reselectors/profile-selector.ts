import { RootState } from "../store";

export const stateProfilePosts = (state: RootState) => {
  return state.profileReducer.posts;
};

export const stateProfileSelectedPost = (state: RootState) => {
  return state.profileReducer.selectPost;
};

export const stateProfileActualStatus = (state: RootState) => {
  return state.profileReducer.actualStatus;
};

export const stateProfileIsOwner = (state: RootState) => {
  return state.profileReducer.isOwner;
};

export const stateProfileIsFetching = (state: RootState) => {
  return state.profileReducer.isFetching;
};

export const stateProfile = (state: RootState) => {
  return state.profileReducer.profile;
};
