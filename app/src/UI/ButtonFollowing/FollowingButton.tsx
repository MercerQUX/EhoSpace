import style from "../forms.module.sass";
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
  const dispatch = useAppDispatch();
  const setFollow = (id: number, isFollow: boolean) =>
    dispatch(setFollowed({ id, isFollow }));

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
          className={cn(
            isFollowed ? style.unfollow : style.follow,
            style.following_button
          )}
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
