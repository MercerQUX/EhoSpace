import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type dialogsUsersType = {
  id:number,
  name:string
}
type dialogsMessagesType = {
  id:number,
  body:string,
  other:boolean
}

type initialStateType = {
  dialogsUsers: Array<dialogsUsersType>;
  dialogsMessages: Array<dialogsMessagesType>;
};

const initialState: initialStateType = {
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

const dialogsSlice = createSlice({
  name: "dialogsPage",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<string>) {
      state.dialogsMessages = [
        ...state.dialogsMessages,
        {
          id: state.dialogsMessages.length + 1,
          body: action.payload,
          other: false,
        },
      ];
    },
  },
});

export const dialogsAction = dialogsSlice.actions;

export const dialogsReducer = dialogsSlice.reducer;
