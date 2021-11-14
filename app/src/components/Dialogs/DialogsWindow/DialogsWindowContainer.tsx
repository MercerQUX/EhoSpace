import { RootState } from "..";
import { SingleDialog } from "./SingleDialog";
import { connect } from "react-redux";
import { compose } from "redux";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";

export const DialogsWindowConnect = connect(
  (state: RootState) => ({
    dialogsUsers: state.pageDialogs.dialogsUsers,
  }),
  {}
);

export const DialogsWindowContainer = compose<any>(
  DialogsWindowConnect,
  withAuthRedirect
)(SingleDialog);
