import style from "../../components/User/users.module.css";
import cn from "classnames";
import { useAppDispatch } from "../../hooks/redux-use";
import { setFollowed } from "../../store/thunks/usersThunks";

interface defaultProps {
  isAuth: boolean;
  isFollowingDisabled: boolean;
  isFollowed: boolean;
  idUser: number;
}
export const FollowingButton: React.FC<defaultProps> = ({
  isAuth,
  isFollowingDisabled,
  isFollowed,
  idUser,
}) => {
  const dispatch = useAppDispatch();
  const setFollow = (id: number, isFollow: boolean) =>
    dispatch(setFollowed({ id, isFollow }));
  return (
    <div>
      {isAuth ? (
        <button
          className={cn(isFollowed ? style.follow : style.unfollow)}
          onClick={() => setFollow(idUser, isFollowed)}
          disabled={isFollowingDisabled}
        >
          {isFollowed ? "Follow" : "Unfollow"}
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
