import {
  getNumberTotalUsersAPI,
  getPartUsersAPI,
  rewriteUserAPI,
} from "../API/user-API";
import { usersType } from "./reducersTypes";

const FOLLOWING = "users/FOLLOWING";
const SET_USERS = "users/SET_USERS";
const COUNT_LOAD_USERS = "users/COUNT_LOAD_USERS";
const TOTAL_USERS = "users/TOTAL_USERS";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const FOLLOWING_DISABLED = "users/FOLLOWING_DISABLED ";

type initialStateType = {
  users: Array<usersType>;
  pageSize: number;
  totalUsersCount: number;
  numLoadedPages: number;
  isFetching: boolean;
  isEmpty: boolean;
  isFollowingDisabled: boolean;
};

const initState: initialStateType = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  numLoadedPages: 1,
  isFetching: true,
  isEmpty: false,
  isFollowingDisabled: false,
};

const UsersReducer = (state = initState, action: any): initialStateType => {
  switch (action.type) {
    case FOLLOWING:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, followed: action.isFollow } : u
        ),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    case COUNT_LOAD_USERS:
      if (state.totalUsersCount / state.pageSize + 1 > state.numLoadedPages) {
        return { ...state, numLoadedPages: 1 + state.numLoadedPages };
      } else {
        return { ...state, isEmpty: true };
      }
    case TOTAL_USERS:
      return { ...state, totalUsersCount: action.count - 1 };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.toggle };
    case FOLLOWING_DISABLED:
      return { ...state, isFollowingDisabled: action.toggle };
    default:
      return state;
  }
};
// TYPES
type followingAT = (
  id: number,
  isFollow: boolean
) => {
  type: typeof FOLLOWING;
  id: number;
  isFollow: boolean;
};
type setUsersAT = (users: Array<usersType>) => {
  type: typeof SET_USERS;
  users: Array<usersType>;
};
type loadedPageAT = () => { type: typeof COUNT_LOAD_USERS };
type totalUsersTC = (count: number) => {
  type: typeof TOTAL_USERS;
  count: number;
};
type toggleIsFetchingAT = (toggle: boolean) => {
  type: typeof TOGGLE_IS_FETCHING;
  toggle: boolean;
};
type toggleIsDisabledFollowingAT = (toggle: boolean) => {
  type: typeof FOLLOWING_DISABLED;
  toggle: boolean;
};
// ACTIONS CREATOR
export const followingAC: followingAT = (id, isFollow) => ({
  type: FOLLOWING,
  id: id,
  isFollow: isFollow,
});

export const setUsersAC: setUsersAT = (users) => ({
  type: SET_USERS,
  users: users,
});

export const loadedPageAC: loadedPageAT = () => ({ type: COUNT_LOAD_USERS });

export const totalUsersAC: totalUsersTC = (count) => ({
  type: TOTAL_USERS,
  count: count,
});

export const toggleIsFetchingAC: toggleIsFetchingAT = (toggle) => ({
  type: TOGGLE_IS_FETCHING,
  toggle: toggle,
});

export const toggleIsDisabledFollowingAC: toggleIsDisabledFollowingAT = (
  toggle
) => ({
  type: FOLLOWING_DISABLED,
  toggle: toggle,
});
// THUNKS CREATORS
export const getUsersTC = (page: any, limit: any) => async (dispatch: any) => {
  let data = await getPartUsersAPI(page, limit);
  dispatch(setUsersAC(data));
  dispatch(loadedPageAC());
  dispatch(toggleIsFetchingAC(false));
};

export const getTotalUsersTC = () => async (dispatch: any) => {
  let data = await getNumberTotalUsersAPI();
  dispatch(totalUsersAC(data));
};

export const followedTC =
  (data: any, isFollow: any) => async (dispatch: any) => {
    if (data.id != undefined) {
      dispatch(toggleIsDisabledFollowingAC(true));
      dispatch(followingAC(data.id, isFollow));
      await rewriteUserAPI(data.id, { ...data, followed: isFollow });
      dispatch(toggleIsDisabledFollowingAC(false));
    }
  };

export default UsersReducer;
