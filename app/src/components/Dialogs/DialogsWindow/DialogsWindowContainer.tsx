import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import SingleDialog from "./SingleDialog";
import { RootState } from "../../../redux/redux-store";

const DialogsWindowConnect = connect(
  (state: RootState) => ({
    dialogsUsers: state.pageDialogs.dialogsUsers,
  }),
  (dispatch) => ({})
);

export default compose<any>(
  DialogsWindowConnect,
  withAuthRedirect
)(SingleDialog);
