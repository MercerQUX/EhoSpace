import { dialogsMessagesType, dialogsUsersType } from "../types/ReducersTypes";

const ADD_MESSAGE = "dialog/ADD_MESSAGE";

type initialStateType = {
  dialogsUsers: Array<dialogsUsersType>;
  dialogsMessages: Array<dialogsMessagesType>;
};

const initState: initialStateType = {
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
};

const DialogsReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        dialogsMessages: [
          ...state.dialogsMessages,
          {
            id: state.dialogsMessages.length + 1,
            body: action.value,
            other: false,
          },
        ],
      };
    default:
      return state;
  }
};
export default DialogsReducer;
