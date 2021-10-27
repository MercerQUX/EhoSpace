import Messages from "./Message";
import {
  addMessageAction,
  changeInputMessageAction,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

let MessageContainer = connect(
  (state) => ({
    dialogsMessages: state.pageDialogs.dialogsMessages,
    newText: state.pageDialogs.newTextMessage,
  }),
  (dispatch) => ({
    addMessage: () => dispatch(addMessageAction()),
    changeInputMessage: (text) => {
      dispatch(changeInputMessageAction(text));
    },
  })
)(Messages);

export default MessageContainer;
