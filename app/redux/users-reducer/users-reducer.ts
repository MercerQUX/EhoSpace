import { usersType } from "../types/ReducersTypes";

const FOLLOWING = "users/FOLLOWING";
const SET_USERS = "users/SET_USERS";
const COUNT_LOAD_USERS = "users/COUNT_LOAD_USERS";
const TOTAL_USERS = "users/TOTAL_USERS";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const FOLLOWING_DISABLED = "users/FOLLOWING_DISABLED ";

export type initialStateType = {
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

export const UsersReducer = (state = initState, action: any): initialStateType => {
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

export default UsersReducer;
