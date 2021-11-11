import { RootState } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { getSingleUserAPI } from "../API/profile-API";
import { rewriteUserAPI } from "../API/user-API";
import { profileType } from "./types/ReducersTypes";

const ADD_POST = "profile/ADD_POST";
const GET_SELECTED_PROFILE = "profile/GET_SELECTED_PROFILE";
const CHANGED_STATUS = "profile/CHANGED_STATUS";
const REWRITE_PROFILE = "REWRITE_PROFILE";

// Types
type addPostAT = {
  type: typeof ADD_POST;
  value: string;
};
type setSelectedProfileAT = {
  type: typeof GET_SELECTED_PROFILE;
  profile: profileType;
};
type changeStatusAT = {
  type: typeof CHANGED_STATUS;
  text: string;
};
type rewriteProfileAT = {
  type: typeof REWRITE_PROFILE;
  profile: profileType;
};

type ProfileActionsType =
  | addPostAT
  | setSelectedProfileAT
  | changeStatusAT
  | rewriteProfileAT;

type ProfileThunksType = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  ProfileActionsType
>;
// ACTIONS CREATOR

export const addPostAC = (value: string): addPostAT => ({
  type: ADD_POST,
  value: value,
});

export const setSelectedProfileAC = (
  profile: profileType
): setSelectedProfileAT => ({
  type: GET_SELECTED_PROFILE,
  profile: profile,
});

export const changeStatusAC = (text: string): changeStatusAT => ({
  type: CHANGED_STATUS,
  text: text,
});

export const rewriteProfileAC = (profile: profileType): rewriteProfileAT => ({
  type: REWRITE_PROFILE,
  profile: profile,
});
//THUNKS CREATOR
export const getProfileDataTC =
  (id: number, loggedID: number, isAuth: boolean): ProfileThunksType =>
  async (dispatch) => {
    let selectedUser = id == undefined && isAuth ? loggedID : id;
    let data = await getSingleUserAPI(selectedUser);
    dispatch(setSelectedProfileAC(data));
  };

export const changedStatusTC =
  (id: number, user: profileType): ProfileThunksType =>
  async () => {
    await rewriteUserAPI(id, user);
  };
