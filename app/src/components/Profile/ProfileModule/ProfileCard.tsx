import { profileDefaultProps } from "./ProfileContainer";
import style from "../../CSS/profile.module.css";
import { FormEditStatus } from "../../../UI/FormEditStatus/FormEditStatus";
import { useState } from "react";
import { FormEditProfile } from "../../../UI/FormEditProfile/FormEditProfile";

export const ProfileCard: React.FC<profileDefaultProps> = ({
  profile,
  actualID,
  changeStatus,
  sendNewProfile,
  rewriteProfile
}) => {
  const isOwnerProfile = actualID === profile.id;
  const [isEditStatus, setIsEditStatus] = useState(true);
  const [isEditProfile, setIsEditProfile] = useState(false);
  return (
    <div>
      <div className={style.profileCard}>
        <div className={style.leftCard}>
          <div>
            <img src={profile.avatar} alt="avatar" />
          </div>
          <div className={style.profileInfo}>
            <strong className={style.profileName}>{`${profile.name} ${
              profile.nickname ? `"${profile.nickname}"` : ""
            } ${profile.surname}`}</strong>
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

// <EditMode
//   value={profile}
//   onSubmit={props.onSubmitProfile}
//   closeEditProfile={props.closeEditProfile}
// />
