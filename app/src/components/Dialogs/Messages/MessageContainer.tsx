import { RootState, AppDispatch, addMessageAC } from "..";
import { connect } from "react-redux";
import { Messages } from "./Message";

export const MessageContainer = connect(
  (state: RootState) => ({
    dialogsMessages: state.pageDialogs.dialogsMessages,
  }),
  (dispatch: AppDispatch) => ({
    addMessage: (value: string) => dispatch(addMessageAC(value)),
  })
)(Messages);
