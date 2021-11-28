
const ADD_MESSAGE = "dialog/ADD_MESSAGE";

// Types
type addMessageAT = (value: string) => {
    type: typeof ADD_MESSAGE;
    value: string;
  };
  export const addMessageAC: addMessageAT = (value) => ({
    type: ADD_MESSAGE,
    value: value,
  });