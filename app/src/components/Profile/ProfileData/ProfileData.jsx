import React, { useEffect } from "react";
import * as axios from "axios";
import Preloader from "../../common/Preloader";
import ProfileCard from "./ProfileCard";
import { getSingleUserAPI } from "../../../API/API";

const ProfileData = (props) => {
  let selectedUser =
    props.match.params.UserID == undefined && props.isAuth
      ? props.idLoggedUser
      : props.match.params.UserID;

  useEffect(() => {
    getSingleUserAPI(selectedUser).then((data) => {
      props.setSelectedProfile(data);
    });
  }, [props.isAuth]);

  return (
    <div>
      {props.isAuth && props.profile != null ? (
        <ProfileCard profile={props.profile} />
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default ProfileData;
