import { AppDispatch, RootState } from "../../../redux/redux-store";
import { profileType, usersType } from "../../../redux/types/ReducersTypes";
import {
  connect,
  sendRewriteProfileTC,
  changeStatusAC,
  getProfileDataTC,
  rewriteProfileAC,
  withRouter,
  withAuthRedirect,
  compose,
  Preloader,
} from "../index";
import { useEffect, useState } from "react";
import { ProfileCard } from "../ProfileModule/ProfileCard";

export type profileDefaultProps = TStateProps & TDispatchProps;

interface TStateProps {
  profile: profileType;
  actualID: number;
}
interface TDispatchProps {
  changeStatus: (text: string) => void;
  sendNewProfile: (userID: number, data: profileType) => void;
  rewriteProfile: (data: profileType) => void;
}
interface TOwnProps {
  match: any;
  isAuth: boolean;
  idLoggedUser: number;
  getProfileData: (userID: number, loggedID: number, isAuth: boolean) => any;
}

const ProfileContainer: React.FC<TOwnProps & profileDefaultProps> = ({
  match,
  idLoggedUser,
  isAuth,
  getProfileData,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProfileData(match.params.UserID, idLoggedUser, isAuth);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [isAuth]);

  return (
    <div>
      {props.profile != null && !isLoading ? (
        <ProfileCard {...props} />
      ) : (
        <Preloader />
      )}
    </div>
  );
};

const ProfileDataConnect = connect(
  (state: RootState) => ({
    profile: state.pageProfile.profile,
    idLoggedUser: state.authenticator.userID,
    isAuth: state.authenticator.isAuth,
    actualID: state.authenticator.userID,
  }),
  (dispatch: AppDispatch) => ({
    getProfileData: (userID: number, loggedID: number, isAuth: boolean) =>
      dispatch(getProfileDataTC(userID, loggedID, isAuth)),
    changeStatus: (text: string) => dispatch(changeStatusAC(text)),
    sendNewProfile: (userID: number, data: usersType) =>
      dispatch(sendRewriteProfileTC(userID, data)),
    rewriteProfile: (data: usersType) => dispatch(rewriteProfileAC(data)),
  })
);

export default compose<any>(
  ProfileDataConnect,
  withRouter,
  withAuthRedirect
)(ProfileContainer);
