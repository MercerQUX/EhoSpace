import { connect } from "react-redux";
import DialogWindow from "./DialogsWindow";

const DialogsWindowContainer = connect(
  (state) => ({
    dialogsUsers: state.pageDialogs.dialogsUsers,
  }),
  (dispatch) => ({})
)(DialogWindow);

export default DialogsWindowContainer;
