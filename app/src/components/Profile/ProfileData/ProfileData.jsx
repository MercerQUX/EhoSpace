import React, { useEffect } from "react";
import * as axios from "axios";
import Preloader from "../../common/Preloader";
import ProfileCard from "./ProfileCard";

const ProfileData = (props) => {
  let selectedUser =
    props.match.params.UserID == undefined && props.isAuth
      ? props.idLoggedUser
      : props.match.params.UserID;

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${selectedUser}`).then((res) => {
      props.setSelectedProfile(res.data);
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
