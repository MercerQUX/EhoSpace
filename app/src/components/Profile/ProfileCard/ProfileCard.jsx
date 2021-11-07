import { useEffect, useState } from "react";
import { Field, reduxForm, change } from "redux-form";
import { FormControl } from "../../../UI/form/FormControl";
import { maxLength100 } from "../../../UI/form/validation/validators";
import style from "../../CSS/profile.module.css";
import EditMode from "./EditMode";

const EditReduxForm = reduxForm({ form: "editStatus" })(
  ({ change, handleSubmit, value }) => {
    useEffect(() => {
      change("editStatus", value);
    }, [value]);

    return (
      <form onBlur={handleSubmit}>
        <Field
          className={style.editStatusInput}
          component={FormControl}
          type={"textarea"}
          name={"editStatus"}
          validate={[maxLength100]}
          dataType={"textarea"}
          autoFocus={true}
        />
      </form>
    );
  }
);

const ProfileCard = ({ profile, actualID, location, ...props }) => {
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
              {!props.isEditStatus && (
                <strong
                  className={style.profileStatus}
                  onDoubleClick={props.openEditStatus}
                >
                  {profile.status || "==="}
                </strong>
              )}
              {props.isEditStatus && (
                <EditReduxForm
                  value={profile.status}
                  onSubmit={props.onSubmitStatus}
                />
              )}
            </div>
          </div>
        </div>
        <div className={style.rightCard}>
          {props.isOwnerProfile ? (
            <button
              onClick={() => props.setIsEditProfile(true)}
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
      {props.isEditProfile && (
        <EditMode
          value={profile}
          onSubmit={props.onSubmitProfile}
          closeEditProfile={props.closeEditProfile}
        />
      )}
    </div>
  );
};

export default ProfileCard;
