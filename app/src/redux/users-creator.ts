import { RootState } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import {
  getNumberTotalUsersAPI,
  getPartUsersAPI,
  rewriteUserAPI,
} from "../API/user-API";
import { usersType } from "./types/ReducersTypes";

const FOLLOWING = "users/FOLLOWING";
const SET_USERS = "users/SET_USERS";
const COUNT_LOAD_USERS = "users/COUNT_LOAD_USERS";
const TOTAL_USERS = "users/TOTAL_USERS";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const FOLLOWING_DISABLED = "users/FOLLOWING_DISABLED ";

// TYPES
type UsersActionsType =
  | followingAT
  | setUsersAT
  | loadedPageAT
  | toggleIsFetchingAT
  | toggleIsDisabledFollowingAT
  | totalUsersAT;

type UsersThunksType = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  UsersActionsType
>;
type followingAT = {
  type: typeof FOLLOWING;
  id: number;
  isFollow: boolean;
};
type setUsersAT = {
  type: typeof SET_USERS;
  users: Array<usersType>;
};
type loadedPageAT = { type: typeof COUNT_LOAD_USERS };
type totalUsersAT = {
  type: typeof TOTAL_USERS;
  count: number;
};
type toggleIsFetchingAT = {
  type: typeof TOGGLE_IS_FETCHING;
  toggle: boolean;
};
type toggleIsDisabledFollowingAT = {
  type: typeof FOLLOWING_DISABLED;
  toggle: boolean;
};
// ACTIONS CREATOR
export const followingAC = (id: number, isFollow: boolean): followingAT => ({
  type: FOLLOWING,
  id: id,
  isFollow: isFollow,
});

export const setUsersAC = (users: Array<usersType>): setUsersAT => ({
  type: SET_USERS,
  users: users,
});

export const loadedPageAC = (): loadedPageAT => ({ type: COUNT_LOAD_USERS });

export const totalUsersAC = (count: number): totalUsersAT => ({
  type: TOTAL_USERS,
  count: count,
});

export const toggleIsFetchingAC = (toggle: boolean): toggleIsFetchingAT => ({
  type: TOGGLE_IS_FETCHING,
  toggle: toggle,
});

export const toggleIsDisabledFollowingAC = (
  toggle: boolean
): toggleIsDisabledFollowingAT => ({
  type: FOLLOWING_DISABLED,
  toggle: toggle,
});
// THUNKS CREATORS
export const getUsersTC =
  (page: number, limit: number): UsersThunksType =>
  async (dispatch) => {
    let data = await getPartUsersAPI(page, limit);
    dispatch(setUsersAC(data));
    dispatch(loadedPageAC());
    dispatch(toggleIsFetchingAC(false));
  };

export const getTotalUsersTC = (): UsersThunksType => async (dispatch) => {
  let data = await getNumberTotalUsersAPI();
  dispatch(totalUsersAC(data));
};

export const followedTC =
  (data: usersType, isFollow: boolean): UsersThunksType =>
  async (dispatch) => {
    if (data.id != undefined) {
      dispatch(toggleIsDisabledFollowingAC(true));
      dispatch(followingAC(data.id, isFollow));
      await rewriteUserAPI(data.id, { ...data, followed: isFollow });
      dispatch(toggleIsDisabledFollowingAC(false));
    }
  };
