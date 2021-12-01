import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  getAuthID,
  isAuthInitialization,
} from "../../../store/reselectors/auth-selector";
import { profileAction } from "../../../store/reducers/profileSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-use";
import { getProfile } from "../../../store/reselectors/profile-selector";
import {
  sendRewriteProfile,
  updateAuthProfile,
} from "../../../store/thunks/profileThunks";
import { ProfileCard } from "./ProfileCard";
import { Preloader } from "../../../asset/common/Preloader";
import { initlizationProfile } from "../../Helpers/initialzationHelper";

export const ProfileContainer: React.FC<any> = () => {
  const { idLoggedUser, profile, auth } = {
    idLoggedUser: useAppSelector(getAuthID),
    profile: useAppSelector(getProfile),
    auth: useAppSelector(isAuthInitialization),
  };
  const { changeStatus, rewriteProfile } = profileAction;

  const sendNewProfile = sendRewriteProfile;
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(true);
  console.log("bod ", useParams());
  useEffect(() => {
    initlizationProfile(4, idLoggedUser, auth,dispatch);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);
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
