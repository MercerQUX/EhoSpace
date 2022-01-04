import {
  fetchArrayFollowUsers,
  fetchChatMessages,
  sendMessages,
} from "../thunks/dialogs-thunk";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dialogsUsersType, dialogsMessagesType } from "../../models/IDialogs";

type initialStateType = {
  dialogsUsers: Array<dialogsUsersType>;
  dialogsMessages: Array<dialogsMessagesType>;
  isLoading: boolean;
  selectedUser: dialogsUsersType;
};

const initialState: initialStateType = {
  dialogsUsers: [],
  dialogsMessages: [],
  isLoading: false,
  selectedUser: {
    id: 0,
    name: "",
    avatar: "",
    surname: "",
    nickname: "",
  },
};

const dialogsSlice = createSlice({
  name: "dialogsPage",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<dialogsMessagesType>) {
      state.dialogsMessages = [...state.dialogsMessages, action.payload];
    },
    selectActiveDialogs(state, action: PayloadAction<string | undefined>) {
      if (action.payload) {
        state.selectedUser = state.dialogsUsers.filter(
          (user) => user.id === Number(action.payload)
        )[0];
      }
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
    [fetchChatMessages.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchChatMessages.fulfilled.type]: (
      state,
      action: PayloadAction<dialogsMessagesType[]>
    ) => {
      state.dialogsMessages = action.payload;
      state.isLoading = false;
    },
    [fetchChatMessages.rejected.type]: (state) => {
      state.dialogsMessages = [];
      state.isLoading = false;
    },
    [sendMessages.pending.type]: (state) => {},
    [sendMessages.fulfilled.type]: (
      state,
      action: PayloadAction<dialogsMessagesType>
    ) => {
      state.dialogsMessages = [...state.dialogsMessages, action.payload];
    },
    [sendMessages.rejected.type]: (state) => {},
  },
});

export const dialogsAction = dialogsSlice.actions;

export const dialogsReducer = dialogsSlice.reducer;
