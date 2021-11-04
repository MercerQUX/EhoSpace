import Messages from "./Message";
import { addMessageAC } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { compose } from "redux";

let MessageContainerConnect = connect(
  (state) => ({
    dialogsMessages: state.pageDialogs.dialogsMessages,
  }),
  (dispatch) => ({
    addMessage: (value) => dispatch(addMessageAC(value)),
  })
);

export default compose(MessageContainerConnect)(Messages);
