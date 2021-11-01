import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import DialogWindow from "./DialogsWindow";

const DialogsWindowConnect = connect(
  (state) => ({
    dialogsUsers: state.pageDialogs.dialogsUsers,
  }),
  (dispatch) => ({})
);

const DialogsWindowContainer = compose(
  DialogsWindowConnect,
  withAuthRedirect
)(DialogWindow);

export default DialogsWindowContainer;
