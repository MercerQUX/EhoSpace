const CHANGE_INPUT_POST = "CHANGE_INPUT_POST";
const ADD_POST = "ADD_POST";

const initState = {
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
};

const ProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts = [
        ...state.posts,
        {
          id: state.posts.length + 1,
          body: state.newTextPost,
        },
      ];
      state.newTextPost = "";
      return state;
    case CHANGE_INPUT_POST:
      state.newTextPost = action.bodyText;
      return state;
    default:
      return state;
  }
};

export const addPostAction = () => ({
  type: ADD_POST,
});

export const changeInputPostAction = (text) => ({
  type: CHANGE_INPUT_POST,
  bodyText: text,
});

export default ProfileReducer;
