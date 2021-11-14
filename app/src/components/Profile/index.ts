export { ProfileCardContainer } from "./ProfileModule/ProfileContainer";
export { PostCreaterContainer } from "./PostModule/PostCreaterContainer";
export { ProfileCard } from "./ProfileModule/ProfileCard";
export { Post } from "./PostModule/Post";
export { Preloader } from "../../asset/common/Preloader";
export { FormEditStatus } from "../../UI/FormEditStatus/FormEditStatus";
export { FormEditProfile } from "../../UI/FormEditProfile/FormEditProfile";
export { FormCreatePost } from "../../UI/FormCreatePost/FormCreatePost";
export { PostCreater } from "./PostModule/PostCreater";
export {
  addPostAC,
  changeStatusAC,
  getProfileDataTC,
  rewriteProfileAC,
  sendRewriteProfileTC,
} from "../../redux/profile-creators";

export type { AppDispatch, RootState } from "../../redux/redux-store";
export type { profileType, usersType } from "../../redux/types/ReducersTypes";
export type { defaultPropsProfile } from "./ProfileModule/ProfileContainer";
