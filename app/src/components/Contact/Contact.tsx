import style from "./contact.module.sass";
import { NavLink } from "react-router-dom";
import notAvatar from "../../asset/notAvatar.jpg";

type defaultProps = {
  id: number;
  data: any;
};
export const User: React.FC<defaultProps> = ({ data }) => {
  const avatars = data.avatar ? data.avatar : notAvatar;

  return (
    <div className={style.wrapperUser}>
      <div className={style.leftContent}>
        <NavLink
          onClick={() => window.scrollTo({ top: 0 })}
          className={style.user_img}
          to={`/profile/${data.id}`}
        >
          <img src={avatars} alt="avatar" />
        </NavLink>
        <div className={style.userInfo}>
          <div className={style.userInfo__fullname}>
            {`${data.name} ${data.surname}`}
          </div>
          <div className={style.userInfo__nickname}>{data.nickname}</div>
        </div>
      </div>
      <div className={style.rightContent}>
        <strong className={style.userInfo__country}>{data.country}</strong>
        <NavLink
          className={style.btn_message}
          onClick={() => window.scrollTo({ top: 0 })}
          to={`/dialogs/${data.id}`}
        >
          Send Message
        </NavLink>
      </div>
    </div>
  );
};
