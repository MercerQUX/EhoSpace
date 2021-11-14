import { NavLink } from "react-router-dom";
import { dialogsUsersType } from "..";
import style from "../dialogs.module.css";

type defaultProps = {
  dialogsUsers: Array<dialogsUsersType>;
};

export const SingleDialog: React.FC<defaultProps> = ({ dialogsUsers }) => {
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
