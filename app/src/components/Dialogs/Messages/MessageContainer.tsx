import Messages from "./Message";
import { addMessageAC } from "../../../redux/dialogs-creators";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppDispatch, RootState } from "../../../redux/redux-store";

let MessageContainerConnect = connect(
  (state: RootState) => ({
    dialogsMessages: state.pageDialogs.dialogsMessages,
  }),
  (dispatch: AppDispatch) => ({
    addMessage: (value: string) => dispatch(addMessageAC(value)),
  })
);

export default compose<any>(MessageContainerConnect)(Messages);
