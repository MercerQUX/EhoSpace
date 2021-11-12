import style from "../CSS/main.module.css";
import PostCreaterContainer from "./PostModule/PostCreaterContainer";
import ProfileContainer from "./ProfileModule/ProfileContainer";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div>
        <ProfileContainer />
        <PostCreaterContainer />
      </div>
    </div>
  );
};

export default Profile;
