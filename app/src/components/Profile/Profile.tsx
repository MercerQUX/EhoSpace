import style from "../../main.module.css";
import { PostCreater } from "./PostModule/PostCreater";
import { ProfileContainer } from "./ProfileModule/ProfileContainer";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div>
        <ProfileContainer />
        <PostCreater />
      </div>
    </div>
  );
};

export default Profile;
