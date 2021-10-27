const CHANGE_INPUT_MESSAGE = "CHANGE_INPUT_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

const initState = {
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
  newTextMessage: "",
};

const DialogsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        dialogsMessages: [
          ...state.dialogsMessages,
          {
            id: state.dialogsMessages.length + 1,
            body: state.newTextMessage,
            other: false,
          },
        ],
        newTextMessage: "",
      };
    case CHANGE_INPUT_MESSAGE:
      return { ...state, newTextMessage: action.bodyText };
    default:
      return state;
  }
};

export const addMessageAction = () => ({
  type: ADD_MESSAGE,
});

export const changeInputMessageAction = (text) => ({
  type: CHANGE_INPUT_MESSAGE,
  bodyText: text,
});

export default DialogsReducer;
