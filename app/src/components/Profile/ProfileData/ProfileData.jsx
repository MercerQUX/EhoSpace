import React, { useEffect } from "react";
import Preloader from "../../common/Preloader";
import ProfileCard from "./ProfileCard";

const ProfileData = (props) => {
  console.log(props);
  useEffect(() => {
    props.getProfileData(
      props.match.params.UserID,
      props.idLoggedUser,
      props.isAuth
    );
  }, [props.isAuth]);

  return (
    <div>
      {props.isAuth && props.profile != null ? (
        <ProfileCard
          saveStatus={props.saveStatus}
          changeStatus={props.changeStates}
          profile={props.profile}
        />
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default ProfileData;
