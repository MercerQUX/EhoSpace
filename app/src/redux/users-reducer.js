const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Frank",
      status: "I wanna live!",
      country: "Russian",
      city: "Moscov",
    },
    {
      id: 2,
      followed: false,
      fullName: "Dmitro",
      status: "I wanna become the most best!",
      country: "Ukraine",
      city: "Kiev",
    },
    {
      id: 3,
      followed: false,
      fullName: "Vasil",
      status: "I wanna drink to tea.",
      country: "Ukranine",
      city: "Dnipro",
    },
    {
      id: 4,
      followed: false,
      fullName: "Vinny",
      status: "I wanna live happy!",
      country: "Russian",
      city: "Krasnodar",
    },
  ],
};

const UsersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userID ? { ...u, follow: true } : u
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userID ? { ...u, follow: false } : u
        ),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID: userID });

export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID: userID });

export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export default UsersReducer;
