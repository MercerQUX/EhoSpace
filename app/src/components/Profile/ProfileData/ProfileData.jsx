import { useEffect } from "react";
import Preloader from "../../common/Preloader";
import ProfileCard from "./ProfileCard";

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
      {props.profile != null ? <ProfileCard {...props} /> : <Preloader />}
    </div>
  );
};

export default ProfileData;
