import style from "../../components/User/users.module.css";
import cn from "classnames";
import { useAppDispatch } from "../../hooks/redux-use";
import { setFollowed } from "../../store/thunks/users-thunk";
import { Form, Formik } from "formik";

interface IButtonProps {
  isAuth: boolean;
  isFollowingDisabled: boolean;
  isFollowed: boolean;
}

interface IFormikProps extends IButtonProps {
  idUser: number;
}

export const FollowingButton = ({
  isAuth,
  isFollowingDisabled,
  isFollowed,
  idUser,
}: IFormikProps) => {
  const setFollow = (id: number, isFollow: boolean) =>
    dispatch(setFollowed({ id, isFollow }));
  const dispatch = useAppDispatch();
  return (
    <Formik initialValues={{}} onSubmit={() => setFollow(idUser, isFollowed)}>
      {() => (
        <FollowButton
          isAuth={isAuth}
          isFollowed={isFollowed}
          isFollowingDisabled={isFollowingDisabled}
        />
      )}
    </Formik>
  );
};

const FollowButton = ({
  isAuth,
  isFollowed,
  isFollowingDisabled,
}: IButtonProps) => {
  return (
    <Form>
      {isAuth ? (
        <button
          className={cn(isFollowed ? style.unfollow : style.follow)}
          disabled={isFollowingDisabled}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </button>
      ) : (
        <div></div>
      )}
    </Form>
  );
};
