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
  newTextMessage: "22",
};

const DialogsReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_MESSAGE:
      state.newTextMessage = action.bodyText;
      return state;
    case ADD_MESSAGE:
      state.dialogsMessages = [
        ...state.dialogsMessages,
        {
          id: state.dialogsMessages.length + 1,
          body: state.newTextMessage,
          other: false,
        },
      ];

      state.newTextMessage = "";
      return state;
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
