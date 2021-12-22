import style from "./users.module.sass";
import { NavLink } from "react-router-dom";
import notAvatar from "../../asset/notAvatar.jpg";
import { FollowingButton } from "../../UI/ButtonFollowing/FollowingButton";

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
          <div className={style.userInfo__status}>{data.status}</div>
        </div>
      </div>
      <div className={style.rightContent}>
        <strong className={style.userInfo__country}>{data.country}</strong>
        <strong className={style.userInfo__city}>
          {data.city === "Not indicated" ? null : data.city}
        </strong>
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
