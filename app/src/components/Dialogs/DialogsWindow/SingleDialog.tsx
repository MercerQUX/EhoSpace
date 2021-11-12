import { NavLink } from "react-router-dom";
import { dialogsUsersType } from "../../../redux/types/ReducersTypes";
import style from "../../CSS/dialogs.module.css";

type defaultProps = {
  dialogsUsers: Array<dialogsUsersType>;
};

const SingleDialog: React.FC<defaultProps> = ({ dialogsUsers }) => {
  return (
    <div className={style.wrapperDialogWindow}>
      {dialogsUsers.map((item) => (
        <div className={style.dialogsWindowItem}>
          <NavLink to={`/dialogs/${item.id}`}>{item.name}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default SingleDialog;
