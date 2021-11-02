import Messages from "./Message";
import { addMessageAC } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

let MessageContainer = connect(
  (state) => ({
    dialogsMessages: state.pageDialogs.dialogsMessages,
  }),
  (dispatch) => ({
    addMessage: (value) => dispatch(addMessageAC(value)),
  })
)(Messages);

export default MessageContainer;
