import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux-use";
import { dialogsUsers } from "../../../store/reselectors/dialogs-selector";
import style from "../dialogs.module.css";

export const WindowDialog: React.FC = () => {
  const allUsersInDialog = useAppSelector(dialogsUsers);
  return (
    <div className={style.wrapperDialogWindow}>
      {allUsersInDialog.map((item) => (
        <div className={style.dialogsWindowItem}>
          <NavLink to={`/dialogs/${item.id}`}>{item.name}</NavLink>
        </div>
      ))}
    </div>
  );
};
