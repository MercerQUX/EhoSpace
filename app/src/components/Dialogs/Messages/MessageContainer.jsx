import Messages from "./Message";
import {
  addMessageAC,
  changeInputMessageAC,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

let MessageContainer = connect(
  (state) => ({
    dialogsMessages: state.pageDialogs.dialogsMessages,
    newText: state.pageDialogs.newTextMessage,
  }),
  (dispatch) => ({
    addMessage: () => dispatch(addMessageAC()),
    changeInputMessage: (text) => {
      dispatch(changeInputMessageAC(text));
    },
  })
)(Messages);

export default MessageContainer;
