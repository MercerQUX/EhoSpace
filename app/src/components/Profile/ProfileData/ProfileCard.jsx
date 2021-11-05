import { useEffect, useState } from "react";
import { Field, reduxForm, change } from "redux-form";
import { FormControl } from "../../../UI/form/FormControl";
import style from "../../CSS/profile.module.css";

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
          dataType={"textarea"}
          autoFocus={true}
        />
      </form>
    );
  }
);

const ProfileCard = ({ profile, actualID, location, ...props }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  let openEditMode = () => {
    if (actualID === profile.id) {
      setIsEditMode(true);
    }
  };
  const onSubmit = (formData) => {
    props.changeStatus(formData.editStatus);
    setIsEditMode(false);
    props.saveStatus(profile.id, {
      ...profile,
      status: formData.editStatus,
    });
  };
  return (
    <div className={style.profileCard}>
      <div className={style.leftCard}>
        <div>
          <img src={profile.avatar} alt="avatar" />
        </div>
        <div className={style.profileInfo}>
          <strong className={style.profileName}>{profile.fullName}</strong>
          <br />
          <br />
          <div>
            {!isEditMode && (
              <strong
                className={style.profileStatus}
                onDoubleClick={openEditMode}
              >
                {profile.status || "==="}
              </strong>
            )}
            {isEditMode && (
              <EditReduxForm value={profile.status} onSubmit={onSubmit} />
            )}
          </div>
        </div>
      </div>
      <div className={style.rightCard}>
        <span>{profile.country}</span>
        <span>{profile.city}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
