import { useState, useEffect, useCallback } from "react";
import { Navigate, useParams } from "react-router";
import {
  stateAuthID,
  stateAuthIsInitialization,
} from "../../../store/reselectors/auth-selector";
import { profileAction } from "../../../store/reducers/profileSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-use";
import {
  stateProfileIsOwner,
  stateProfile,
  stateErrorLoading,
} from "../../../store/reselectors/profile-selector";
import { sendRewriteProfile } from "../../../store/thunks/profile-thunk";
import { ProfileCard } from "./ProfileCard";
import { Preloader } from "../../../asset/common/Preloader";
import { initlizationProfile } from "../../../helpers/initialzationHelper";

export const ProfileContainer: React.FC = () => {
  const {
    paramsSelectedUserID,
    idLoggedUser,
    profile,
    auth,
    isOwner,
    changeStatus,
    rewriteProfile,
    errorLoading,
    dispatch,
  } = {
    paramsSelectedUserID: useParams().userID,
    idLoggedUser: useAppSelector(stateAuthID),
    profile: useAppSelector(stateProfile),
    auth: useAppSelector(stateAuthIsInitialization),
    isOwner: useAppSelector(stateProfileIsOwner),
    changeStatus: profileAction.changeStatus,
    rewriteProfile: profileAction.rewriteProfile,
    errorLoading: useAppSelector(stateErrorLoading),
    dispatch: useAppDispatch(),
  };
  const [isLoading, setIsLoading] = useState(true);
  const initProfile = useCallback(() => {
    initlizationProfile(paramsSelectedUserID, idLoggedUser, auth, dispatch);
  }, [paramsSelectedUserID, idLoggedUser, auth, dispatch]);

  useEffect(() => {
    initProfile();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [initProfile]);
  
  return (
    <div>
      {errorLoading && !profile ? <Navigate to={"/page404"} /> : null}
      {profile !== null && !isLoading ? (
        <ProfileCard
          profile={profile}
          isOwnerProfile={isOwner}
          changeStatus={changeStatus}
          sendNewProfile={sendRewriteProfile}
          rewriteProfile={rewriteProfile}
        />
      ) : (
        <Preloader />
      )}
    </div>
  );
};
