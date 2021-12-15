import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getAuthID } from "./auth-selector";

export const dialogsMessages = (state: RootState) =>
  state.dialogsReducer.dialogsMessages;
export const dialogsUsers = (state: RootState) =>
  state.dialogsReducer.dialogsUsers;
export const ownDialogsMessages = createSelector(
  dialogsMessages,
  getAuthID,
  (messages, idLogged) =>
    messages.map((message) => {
      return { ...message, other: message.idSender === idLogged };
    })
);
