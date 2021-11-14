import { ProfileCardContainer, PostCreaterContainer } from "./index";
import style from "../../main.module.css";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div>
        <ProfileCardContainer />
        <PostCreaterContainer />
      </div>
    </div>
  );
};

export default Profile;
