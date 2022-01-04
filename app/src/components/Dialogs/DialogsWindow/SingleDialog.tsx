import { NavLink } from "react-router-dom";
import style from "../dialogs.module.sass";
import notAvatar from "../../../asset/notAvatar.jpg";
interface defaultProps {
  name: string;
  nickname: string;
  avatar: string;
  id: number;
}
export const SingleDialog: React.FC<defaultProps> = ({
  name,
  nickname,
  avatar,
  id,
}) => {
  return (
    <NavLink
      to={`/dialogs/${id}`}
      className={({ isActive }) => (isActive ? style.activeLink : "")}
    >
      <div className={style.wrapperSingleDialog}>
        <div className={style.infoDialog}>
          <span className={style.infoName}>{nickname || name}</span>
          <span className={style.infoStatus}>offline</span>
        </div>
        <div className={style.avatar}>
          <img src={avatar || notAvatar} alt="avatar" />
        </div>
      </div>
    </NavLink>
  );
};
