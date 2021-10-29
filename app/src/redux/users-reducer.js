const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const COUNT_LOAD_USERS = "COUNT_LOAD_USERS";
const TOTAL_USERS = "TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  numLoadedPages: 1,
  isFetching: true,
  isEmpty: false,
};

const UsersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userID ? { ...u, followed: false } : u
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userID ? { ...u, followed: true } : u
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
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.toggle };
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID: userID });

export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID: userID });

export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export const loadedPageAC = () => ({ type: COUNT_LOAD_USERS });

export const totalUsersAC = (count) => ({ type: TOTAL_USERS, count: count });

export const toggleIsFetchingAC = (toggle) => ({
  type: TOGGLE_IS_FETCHING,
  toggle: toggle,
});

export default UsersReducer;
