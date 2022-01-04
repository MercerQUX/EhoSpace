import { RootState } from "./../store";
import { createSelector } from "@reduxjs/toolkit";
import { stateAuthID } from "./auth-selector";

export const stateDialogsMessages = (state: RootState) =>
  state.dialogsReducer.dialogsMessages;
export const stateDialogsIsLoading = (state: RootState) =>
  state.dialogsReducer.isLoading;
export const stateDialogsUsers = (state: RootState) =>
  state.dialogsReducer.dialogsUsers;
export const dialogsSelectedUser = (state: RootState) =>
  state.dialogsReducer.selectedUser;
export const stateDialogsOwnMessages = createSelector(
  stateDialogsMessages,
  stateAuthID,
  (messages, idLogged) =>
    messages.map((message) => {
      return { ...message, other: message.idSender === idLogged };
    })
);
