import style from "./users.module.css";
import { NavLink } from "react-router-dom";
import { usersType } from ".";


type defaultProps = {
  id: number;
  data: any;
  isFollowingDisabled: boolean;
  followed: (user:usersType,toggle:boolean) => void;
};
export const User: React.FC<defaultProps> = ({
  data,
  isFollowingDisabled,
  ...props
}) => {
  return (
    <div className={style.wrapperUser}>
      <div className={style.leftContent}>
        <NavLink
          onClick={() => window.scrollTo({ top: 0 })}
          className={style.userIMG}
          to={`profile/${data.id}`}
        >
          <img src={data.avatar} alt="avatar" />
        </NavLink>

        <div className={style.dataBlock}>
          <div>{`${data.name} ${data.surname}`}</div>
          <div>{data.nickname}</div>
          <div>{data.status}</div>
        </div>
      </div>
      <div className={style.rightContent}>
        <strong>{data.country}</strong>
        {data.followed ? (
          <button
            className={style.follow}
            onClick={(e) => props.followed(data, false)}
            disabled={isFollowingDisabled}
          >
            Follow
          </button>
        ) : (
          <button
            className={style.unfollow}
            onClick={(e) => props.followed(data, true)}
            disabled={isFollowingDisabled}
          >
            Unfollow
          </button>
        )}
        <strong>{data.city}</strong>
      </div>
    </div>
  );
};
