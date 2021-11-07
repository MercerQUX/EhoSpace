import { useEffect } from "react";
import Preloader from "../../common/Preloader";
import ProfileCardContainer from "../ProfileCard/ProfileCardContainer";

const ProfileData = ({
  match,
  idLoggedUser,
  isAuth,
  getProfileData,
  ...props
}) => {
  useEffect(() => {
    getProfileData(match.params.UserID, idLoggedUser, isAuth);
  }, [isAuth]);
  return (
    <div>
      {props.profile != null ? (
        <ProfileCardContainer {...props} />
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default ProfileData;
