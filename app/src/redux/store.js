import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";

let rerenderEntireTree = () => {
  console.log("state 1");
};

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
  store.pageProfile = ProfileReducer(store.pageProfile, action);
  store.pageDialogs = DialogsReducer(store.pageDialogs, action);
  rerenderEntireTree(store);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default store;
window.store = store;
