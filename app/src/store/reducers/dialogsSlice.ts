import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dialogsUsersType, dialogsMessagesType } from "../../models/IDialogs";
import { fetchArrayFollowUsers } from "../thunks/dialogsThunks";

type initialStateType = {
  dialogsUsers: Array<dialogsUsersType>;
  dialogsMessages: Array<dialogsMessagesType>;
  isLoading: boolean;
};

const initialState: initialStateType = {
  dialogsUsers: [],
  dialogsMessages: [
    { id: 1, body: "Hello", timestamp: "00:00:00 01/01/2022", other: false },
    {
      id: 2,
      body: "How are you?",
      timestamp: "00:00:00 01/01/2022",
      other: true,
    },
    { id: 3, body: "I'm fine", timestamp: "00:00:00 01/01/2022", other: false },
  ],
  isLoading: false,
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
          timestamp: "00:00:00 01/01/2022",
        },
      ];
    },
  },
  extraReducers: {
    [fetchArrayFollowUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchArrayFollowUsers.fulfilled.type]: (
      state,
      action: PayloadAction<dialogsUsersType[]>
    ) => {
      state.isLoading = false;
      state.dialogsUsers = action.payload;
    },
    [fetchArrayFollowUsers.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const dialogsAction = dialogsSlice.actions;

export const dialogsReducer = dialogsSlice.reducer;
