import React, { useEffect } from "react";
import * as axios from "axios";
import Preloader from "../../common/Preloader";
import ProfileCard from "./ProfileCard";

const ProfileData = (props) => {
    let selectedUser = props.match.params.UserID==undefined ? 1 : props.match.params.UserID
  useEffect(() => {
    axios.get(`http://localhost:4000/users/${selectedUser}`).then((res) => {
      props.setSelectedProfile(res.data);
    });
  }, []);
  return (
    <div>
      {props.profile == null ? (
        <Preloader />
      ) : (
        <ProfileCard profile={props.profile}/>
      )}
    </div>
  );
};

export default ProfileData;
