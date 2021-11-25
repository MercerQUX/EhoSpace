import { useState } from "react";
import { useMatch } from "react-router";
import { FormEditProfile, FormEditStatus, defaultPropsProfile } from "..";
import style from "../profile.module.css";

export const ProfileCard: React.FC<defaultPropsProfile> = ({
  profile,
  actualID,
  changeStatus,
  sendNewProfile,
  rewriteProfile,
}) => {
  const isOwnerProfile = actualID === profile.id;
  const [isEditStatus, setIsEditStatus] = useState(true);
  const [isEditProfile, setIsEditProfile] = useState(false);
  console.log(useMatch("userID"))
  return (
    <div>
      <div className={style.profileCard}>
        <div className={style.leftCard}>
          <div>
            <img src={profile.avatar} alt="avatar" />
          </div>
          <div className={style.profileInfo}>
            <strong className={style.profileName}>
              {`${profile.name} 
              ${profile.nickname ? `"${profile.nickname}"` : ""} 
              ${profile.surname}`}
            </strong>
            <br />
            <br />
            <div>
              {isEditStatus || !isOwnerProfile ? (
                <strong
                  className={style.profileStatus}
                  onDoubleClick={() => setIsEditStatus(false)}
                >
                  {profile.status || "==="}
                </strong>
              ) : (
                <FormEditStatus
                  profile={profile}
                  saveStatus={sendNewProfile}
                  setIsEditStatus={setIsEditStatus}
                  changeStatus={changeStatus}
                />
              )}
            </div>
          </div>
        </div>
        <div className={style.rightCard}>
          {isOwnerProfile ? (
            <button
              onClick={() => setIsEditProfile(true)}
              className={style.btn_settings}
            >
              Setting Profile
            </button>
          ) : (
            <div></div>
          )}
          <div className={style.locationCard}>
            <span>{profile.country}</span>
            <span>{profile.city}</span>
          </div>
        </div>
      </div>
      {isEditProfile && (
        <div className={style.wrapperEditMode}>
          <div className={style.wrapperForm}>
            <FormEditProfile
              profile={profile}
              setIsEditProfile={setIsEditProfile}
              rewriteProfile={rewriteProfile}
              sendNewProfile={sendNewProfile}
            />
          </div>
        </div>
      )}
    </div>
  );
};
