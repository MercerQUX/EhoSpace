import { NavLink } from "react-router-dom";
import style from "../../CSS/dialogs.module.css";

const SingleDialog = ({ id, name }) => {
  return (
    <div className={style.dialogsWindowItem}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default SingleDialog;
