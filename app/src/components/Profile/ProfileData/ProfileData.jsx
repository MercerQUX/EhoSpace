import { useEffect, Preloader, ProfileCardContainer } from "./index";

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
