let rerenderEntireTree = () => {
  console.log("state");
};

const CHANGE_INPUT_POST = "CHANGE_INPUT_POST";
const ADD_POST = "ADD_POST";
const CHANGE_INPUT_MESSAGE = "CHANGE_INPUT_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

let store = {
  pageProfile: {
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
  },
  pageDialogs: {
    dialogsUsers: [
      { id: 1, name: "Lux" },
      { id: 2, name: "Lili" },
      { id: 3, name: "Frank" },
      { id: 4, name: "Mazer" },
      { id: 5, name: "Vincent" },
    ],
    dialogsMessages: [
      { id: 1, body: "Hello", other: false },
      { id: 2, body: "How are you?", other: false },
      { id: 3, body: "I'm fine", other: false },
    ],
    newTextMessage: "22",
  },
};

export const dispatch = (action) => {
  switch (action.type) {
    case ADD_POST:
      store.pageProfile.posts = [
        ...store.pageProfile.posts,
        {
          id: store.pageProfile.posts.length + 1,
          body: store.pageProfile.newTextPost,
        },
      ];

      store.pageProfile.newTextPost = "";
      rerenderEntireTree(store);
      break;
    case CHANGE_INPUT_POST:
      store.pageProfile.newTextPost = action.bodyText;
      rerenderEntireTree(store);
      break;
    case CHANGE_INPUT_MESSAGE:
      store.pageDialogs.newTextMessage = action.bodyText;
      rerenderEntireTree(store);
      break;
    case ADD_MESSAGE:
      store.pageDialogs.dialogsMessages = [
        ...store.pageDialogs.dialogsMessages,
        {
          id: store.pageDialogs.dialogsMessages.length + 1,
          body: store.pageDialogs.newTextMessage,
          other: false,
        },
      ];

      store.pageDialogs.newTextMessage = "";

      rerenderEntireTree(store);
      break;
    default:
      return store;
  }
};

export const addPostAction = () => ({
  type: ADD_POST,
});

export const changeInputPostAction = (text) => ({
  type: CHANGE_INPUT_POST,
  bodyText: text,
});

export const addMessageAction = () => ({
  type: ADD_MESSAGE,
});

export const changeInputMessageAction = (text) => ({
  type: CHANGE_INPUT_MESSAGE,
  bodyText: text,
});

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default store;
window.store = store;
