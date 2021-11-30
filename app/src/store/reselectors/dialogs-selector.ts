import { RootState } from "../store";

export const dialogsMessages = (state: RootState) =>
  state.dialogsReducer.dialogsMessages;
export const dialogsUsers = (state: RootState) =>
  state.dialogsReducer.dialogsUsers;
