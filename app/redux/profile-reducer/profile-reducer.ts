import { postsType, profileType } from "../types/ReducersTypes";

const ADD_POST = "profile/ADD_POST";
const GET_SELECTED_PROFILE = "profile/GET_SELECTED_PROFILE";
const CHANGED_STATUS = "profile/CHANGED_STATUS";
const REWRITE_PROFILE = "REWRITE_PROFILE";

type initialStateType = {
  posts: Array<postsType>;
  profile: null | profileType;
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
            body: action.value,
          },
        ],
      };
    case GET_SELECTED_PROFILE:
      return { ...state, profile: action.profile };
    case CHANGED_STATUS:
      return { ...state, profile: { ...state.profile, status: action.text } };
    case REWRITE_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export default ProfileReducer;
