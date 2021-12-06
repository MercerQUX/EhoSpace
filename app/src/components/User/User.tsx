import style from "./users.module.css";
import { NavLink } from "react-router-dom";
import notAvatar from "../../asset/notAvatar.jpg";
import { FollowingButton } from "../../UI/FollowingBtn/Following_btn";

type defaultProps = {
  id: number;
  data: any;
  isFollowingDisabled: boolean;
  friends: Array<number>;
  isAuth: boolean;
};
export const User: React.FC<defaultProps> = ({
  data,
  isFollowingDisabled,
  friends,
  isAuth,
}) => {
  const isFollowed = friends.some((id) => id === data.id);
  const avatars = data.avatar ? data.avatar : notAvatar;

  return (
    <div className={style.wrapperUser}>
      <div className={style.leftContent}>
        <NavLink
          onClick={() => window.scrollTo({ top: 0 })}
          className={style.userIMG}
          to={`/profile/${data.id}`}
        >
          <img src={avatars} alt="avatar" />
        </NavLink>
        <div className={style.dataBlock}>
          <div
            className={style.dataFullName}
          >{`${data.name} ${data.surname}`}</div>
          <div className={style.dataNickname}>{data.nickname}</div>
          <div className={style.dataStatus}>{data.status}</div>
        </div>
      </div>
      <div className={style.rightContent}>
        <strong className={style.dataCountry}>{data.country}</strong>
        <strong className={style.dataCity}>{data.city}</strong>
        <FollowingButton
          isAuth={isAuth}
          isFollowed={isFollowed}
          isFollowingDisabled={isFollowingDisabled}
          idUser={data.id}
        />
      </div>
    </div>
  );
};
