import { getSingleUserAPI } from "../API/profile-API";

const ADD_POST = "ADD_POST";
const CHANGE_INPUT_POST = "CHANGE_INPUT_POST";
const GET_SELECTED_PROFILE = "GET_SELECTED_PROFILE";

let initState = {
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
  newTextPost: "",
  profile: null,
};

const ProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            body: state.newTextPost,
          },
        ],
        newTextPost: "",
      };
    case CHANGE_INPUT_POST:
      return { ...state, newTextPost: action.bodyText };
    case GET_SELECTED_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};
// ACTIONS CREATOR
export const addPostAC = () => ({
  type: ADD_POST,
});

export const changeInputPostAC = (text) => ({
  type: CHANGE_INPUT_POST,
  bodyText: text,
});

export const setSelectedProfileAC = (data) => ({
  type: GET_SELECTED_PROFILE,
  profile: data,
});
//THUNKS CREATOR
export const getProfileDataTC = (userID, loggedID, isAuth) => (dispatch) => {
  let selectedUser = userID == undefined && isAuth ? loggedID : userID;

  getSingleUserAPI(selectedUser).then((data) => {
    dispatch(setSelectedProfileAC(data));
  });
};

export default ProfileReducer;
