import { useState } from "react";
import { rewriteUserAPI } from "../../../API/user-API";
import Preloader from "../../common/Preloader";
import ProfileCard from "./ProfileCard";

const ProfileCardContainer = ({
  actualID,
  saveStatus,
  changeStatus,
  rewriteProfile,
  ...props
}) => {
  const isOwnerProfile = actualID === props.profile.id;
  const [isEditStatus, setIsEditStatus] = useState(false);
  const [isEditProfile, setIsEditProfile] = useState(false);

  let openEditStatus = () => {
    if (isOwnerProfile) {
      setIsEditStatus(true);
    }
  };
  let openEditProfile = () => {
    if (isOwnerProfile) {
      setIsEditProfile(true);
    }
  };
  const closeEditStatus = () => {
    setIsEditStatus(false);
  };
  const closeEditProfile = () => {
    setIsEditProfile(false);
  };
  const onSubmitStatus = (formData) => {
    changeStatus(formData.editStatus);
    setIsEditStatus(false);
    saveStatus(props.profile.id, {
      ...props.profile,
      status: formData.editStatus,
    });
  };
  const onSubmitProfile = (formData) => {
    const newData = {
      ...props.profile,
      name: formData.profileName,
      surname: formData.profileSurname,
      nickname: formData.profileNick || "",
      status: formData.profileStatus || "",
      country: formData.profileCountry,
      city: formData.profileCity || "Not indicated",
      avatar: formData.profileAvatar || props.profile.avatar,
    };
    rewriteProfile(newData);
    rewriteUserAPI(props.profile.id, newData);
  };

  let defaultProps = {
    isOwnerProfile: isOwnerProfile,
    isEditStatus: isEditStatus,
    isEditProfile: isEditProfile,
    setIsEditStatus: setIsEditStatus,
    setIsEditProfile: setIsEditProfile,
    openEditStatus: openEditStatus,
    openEditProfile: openEditProfile,
    closeEditStatus: closeEditStatus,
    closeEditProfile: closeEditProfile,
    onSubmitStatus: onSubmitStatus,
    onSubmitProfile: onSubmitProfile,
    ...props,
  };

  return (
    <div>
      {props.profile != null ? (
        <ProfileCard {...defaultProps} />
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default ProfileCardContainer;
