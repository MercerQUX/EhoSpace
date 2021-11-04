import {
  getNumberTotalUsersAPI,
  getPartUsersAPI,
  rewriteUserAPI,
} from "../API/user-API";

const FOLLOWING = "users/FOLLOWING";
const SET_USERS = "users/SET_USERS";
const COUNT_LOAD_USERS = "users/COUNT_LOAD_USERS";
const TOTAL_USERS = "users/TOTAL_USERS";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const DISABLED_CHANGED_FOLLOWING = "users/DISABLED_CHANGED_FOLLOWING";
const FOLLOWING_DISABLED = "users/FOLLOWING_DISABLED ";

const initState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  numLoadedPages: 1,
  isFetching: true,
  isEmpty: false,
  changeFollow: null,
  isFollowingDisabled: false,
};

const UsersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOWING:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userID
            ? { ...u, followed: u.followed ? false : true }
            : u
        ),
        changeFollow: action.userId
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
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.toggle };
    case DISABLED_CHANGED_FOLLOWING:
      return { ...state, changeFollow: undefined };
    case FOLLOWING_DISABLED:
      return { ...state, isFollowingDisabled: action.toggle };
    case "dd":
      return {...state, changeFollow:action.id}
    default:
      return state;
  }
};
// ACTIONS CREATOR
export const followingAC = (userID) => ({ type: FOLLOWING, userID: userID });

export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export const loadedPageAC = () => ({ type: COUNT_LOAD_USERS });

export const totalUsersAC = (count) => ({ type: TOTAL_USERS, count: count });

export const toggleIsFetchingAC = (toggle) => ({
  type: TOGGLE_IS_FETCHING,
  toggle: toggle,
});

export const disableChangedFollowedAC = () => ({
  type: DISABLED_CHANGED_FOLLOWING,
  toggle: undefined,
});

export const toggleIsDisabledFollowingAC = (toggle) => ({
  type: FOLLOWING_DISABLED,
  toggle: toggle,
});
// THUNKS CREATORS
export const getUsersTC = (page, limit) => async (dispatch) => {
  let data = await getPartUsersAPI(page, limit);
  dispatch(setUsersAC(data));
  dispatch(loadedPageAC());
  dispatch(toggleIsFetchingAC(false));
};

export const getTotalUsersTC = () => async (dispatch) => {
  let data = await getNumberTotalUsersAPI();
  dispatch(totalUsersAC(data));
};

export const followedTC = (idUser, user) => async (dispatch) => {
  if (idUser != undefined) {
    dispatch(toggleIsDisabledFollowingAC(true));
    await rewriteUserAPI(idUser, user);
    dispatch(toggleIsDisabledFollowingAC(false));
    dispatch(disableChangedFollowedAC());
  }
};

export default UsersReducer;
