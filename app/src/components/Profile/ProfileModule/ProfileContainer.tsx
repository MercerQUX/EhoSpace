import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import {
  getAuthID,
  isAuthInitialization,
} from "../../../store/reselectors/auth-selector";
import { profileAction } from "../../../store/reducers/profileSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-use";
import { getProfile } from "../../../store/reselectors/profile-selector";
import { sendRewriteProfile } from "../../../store/thunks/profileThunks";
import { ProfileCard } from "./ProfileCard";
import { Preloader } from "../../../asset/common/Preloader";
import { initlizationProfile } from "../../../helpers/initialzationHelper";

export const ProfileContainer: React.FC<any> = () => {
  const { idLoggedUser, profile, auth } = {
    idLoggedUser: useAppSelector(getAuthID),
    profile: useAppSelector(getProfile),
    auth: useAppSelector(isAuthInitialization),
  };
  const { changeStatus, rewriteProfile } = profileAction;
  let dispatch = useAppDispatch();
  const sendNewProfile = sendRewriteProfile;
  const [isLoading, setIsLoading] = useState(true);
  let paramsSelectedUserID = useParams().userID;
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
      {profile != null && !isLoading ? (
        <ProfileCard
          profile={profile}
          selectUserID={idLoggedUser}
          changeStatus={changeStatus}
          sendNewProfile={sendNewProfile}
          rewriteProfile={rewriteProfile}
        />
      ) : (
        <Preloader />
      )}
    </div>
  );
};
