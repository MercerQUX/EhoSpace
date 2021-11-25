import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { useState, useEffect } from "react";
import {
  AppDispatch,
  changeStatusAC,
  getProfileDataTC,
  Preloader,
  ProfileCard,
  profileType,
  rewriteProfileAC,
  RootState,
  sendRewriteProfileTC,
  usersType,
} from "..";
import { useParams } from "react-router";

export interface defaultPropsProfile {
  profile: profileType;
  actualID: number;
  changeStatus: (text: string) => void;
  sendNewProfile: (userID: number, data: profileType) => void;
  rewriteProfile: (data: profileType) => void;
}

interface defaultPropsProfileOwn {
  idLoggedUser: number;
  getProfileData: (userID: number, loggedID: number, isAuth: boolean) => any;
}

const ProfileContainer: React.FC<defaultPropsProfile & defaultPropsProfileOwn> =
  ({idLoggedUser, getProfileData, ...props }) => {
    const [isLoading, setIsLoading] = useState(true);
    console.log("bod ",useParams())
    useEffect(() => {
      getProfileData(2, idLoggedUser, true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }, []);

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

const ProfileCardConnect = connect(
  (state: RootState) => ({
    profile: state.pageProfile.profile,
    idLoggedUser: state.authenticator.userID,
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

export const ProfileCardContainer = compose<any>(
  ProfileCardConnect,
  withAuthRedirect
)(ProfileContainer);
