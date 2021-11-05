import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import SingleDialog from "./SingleDialog";
import style from "../../CSS/dialogs.module.css";

const DialogWindow = ({ dialogsUsers }) => {
  let mapUserDialogs = dialogsUsers.map((item) => (
    <SingleDialog name={item.name} id={item.id} />
  ));
  return <div className={style.wrapperDialogWindow}>{mapUserDialogs}</div>;
};

const DialogsWindowConnect = connect(
  (state) => ({
    dialogsUsers: state.pageDialogs.dialogsUsers,
  }),
  (dispatch) => ({})
);

export default compose(DialogsWindowConnect, withAuthRedirect)(DialogWindow);
