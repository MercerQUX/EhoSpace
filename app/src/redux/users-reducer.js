const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const COUNT_LOAD_USERS = "COUNT_LOAD_USERS";
const TOTAL_USERS = "TOTAL_USERS";

const initState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  numLoadedPages: 1,
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
      }
    case TOTAL_USERS:
      return { ...state, totalUsersCount: action.count };
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID: userID });

export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID: userID });

export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export const loadedPageAC = () => ({ type: COUNT_LOAD_USERS });

export const totalUsersAC = (count) => ({ type: TOTAL_USERS, count: count });

export default UsersReducer;
