import { useState } from "react";

const ProfileCard = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  let sendNewStatus = () => {
    setIsEditMode(false);
    props.saveStatus(props.profile.id, props.profile);
  };

  return (
    <div>
      <img src="" alt="avatar" />
      <div>
        <strong>{props.profile.fullName}</strong>
        <br />
        {!isEditMode && (
          <strong onDoubleClick={() => setIsEditMode(true)}>
            {props.profile.status}
          </strong>
        )}
        {isEditMode && (
          <input
            autoFocus={true}
            onChange={(e) => props.changeStatus(e.target.value)}
            onBlur={sendNewStatus}
            value={props.profile.status}
          />
        )}
      </div>
      <div>
        <strong>{props.profile.country}</strong>
        <strong>{props.profile.city}</strong>
      </div>
    </div>
  );
};

export default ProfileCard;
