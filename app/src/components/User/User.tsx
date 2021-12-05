import style from "./users.module.css";
import { NavLink } from "react-router-dom";
import { ICommonProfile } from "../../models/ICommonProfile";

type defaultProps = {
  id: number;
  data: any;
  isFollowingDisabled: boolean;
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
          to={`/profile/${data.id}`}
        >
          <img src={data.avatar} alt="avatar" />
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
        {data.followed ? (
          <button
            className={style.follow}
            onClick={(e) => {}}
            disabled={isFollowingDisabled}
          >
            Follow
          </button>
        ) : (
          <button
            className={style.unfollow}
            onClick={(e) => {}}
            disabled={isFollowingDisabled}
          >
            Unfollow
          </button>
        )}
      </div>
    </div>
  );
};
