import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import {
  getAuthID,
  isAuthInitialization,
} from "../../../store/reselectors/auth-selector";
import { profileAction } from "../../../store/reducers/profileSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-use";
import { getIsOwnerProfile, getProfile } from "../../../store/reselectors/profile-selector";
import { sendRewriteProfile } from "../../../store/thunks/profileThunks";
import { ProfileCard } from "./ProfileCard";
import { Preloader } from "../../../asset/common/Preloader";
import { initlizationProfile } from "../../../helpers/initialzationHelper";

export const ProfileContainer: React.FC<any> = () => {
  const { idLoggedUser, profile, auth,isOwner } = {
    idLoggedUser: useAppSelector(getAuthID),
    profile: useAppSelector(getProfile),
    auth: useAppSelector(isAuthInitialization),
    isOwner: useAppSelector(getIsOwnerProfile)
  };
  const { changeStatus, rewriteProfile, defineOwnerProfile } = profileAction;
  let dispatch = useAppDispatch();
  const sendNewProfile = sendRewriteProfile;
  const [isLoading, setIsLoading] = useState(true);
  let paramsSelectedUserID = useParams().userID;
  const initProfile = useCallback(() => {
    initlizationProfile(paramsSelectedUserID, idLoggedUser, auth, dispatch);
  }, [paramsSelectedUserID, idLoggedUser, auth, dispatch]);

  useEffect(() => {
    initProfile();
    //dispatch(defineOwnerProfile(idLoggedUser));
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
          isOwnerProfile={isOwner}
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
