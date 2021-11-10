import { getSingleUserAPI } from "../API/profile-API";
import { rewriteUserAPI } from "../API/user-API";
import { postsType, profileType } from "./reducersTypes";

const ADD_POST = "profile/ADD_POST";
const GET_SELECTED_PROFILE = "profile/GET_SELECTED_PROFILE";
const CHANGED_STATUS = "profile/CHANGED_STATUS";
const REWRITE_PROFILE = "REWRITE_PROFILE";

type initialStateType = {
  posts: Array<postsType>;
  profile: profileType;
  actualStatus: string;
};

let initState: initialStateType = {
  posts: [
    {
      id: 1,
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam dignissimos explicabo ipsam. Deleniti obcaecati veritatis magnam et incidunt itaque. Nemo nihil provident iusto labore reprehenderit odit nisi accusantium non.
            acilis laborum incidunt. Voluptas, laboriosam! Doloremque perferendis ratione, at enim ut odit dolore numquam! Aliquam nam iste distinctio dicta, ducimus magni.`,
    },
    {
      id: 2,
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam dignissimos explicabo ipsam. Deleniti obcaecati veritatis magnam et incidunt itaque. Nemo nihil provident iusto labore reprehenderit odit nisi accusantium non.`,
    },
  ],
  profile: null,
  actualStatus: "",
};

const ProfileReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            body: action.value.newPost,
          },
        ],
      };
    case GET_SELECTED_PROFILE:
      return { ...state, profile: action.profile };
    case CHANGED_STATUS:
      return { ...state, profile: { ...state.profile, status: action.text } };
    case REWRITE_PROFILE:
      return { ...state, profile: action.data };
    default:
      return state;
  }
};
// Types
type addPostAT = (value: string) => {
  type: typeof ADD_POST;
  value: string;
};
type setSelectedProfileAT = (profile: profileType) => {
  type: typeof GET_SELECTED_PROFILE;
  profile: profileType;
};
type changeStatusAT = (text: string) => {
  type: typeof CHANGED_STATUS;
  text: string;
};
type rewriteProfileAT = (profile: profileType) => {
  type: typeof REWRITE_PROFILE;
  profile: profileType;
};
// ACTIONS CREATOR
export const addPostAC: addPostAT = (value) => ({
  type: ADD_POST,
  value: value,
});

export const setSelectedProfileAC: setSelectedProfileAT = (profile) => ({
  type: GET_SELECTED_PROFILE,
  profile: profile,
});

export const changeStatusAC: changeStatusAT = (text) => ({
  type: CHANGED_STATUS,
  text: text,
});

export const rewriteProfileAC: rewriteProfileAT = (profile) => ({
  type: REWRITE_PROFILE,
  profile: profile,
});
//THUNKS CREATOR
export const getProfileDataTC =
  (userID: any, loggedID: any, isAuth: boolean) => async (dispatch: any) => {
    let selectedUser = userID == undefined && isAuth ? loggedID : userID;
    let data = await getSingleUserAPI(selectedUser);
    dispatch(setSelectedProfileAC(data));
  };

export const changedStatusTC = (userID: any, user: any) => async () => {
  await rewriteUserAPI(userID, user);
};

export default ProfileReducer;
