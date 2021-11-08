import { useEffect } from "react";
import Preloader from "../../common/Preloader";
import ProfileCardContainer from "../ProfileCard/ProfileCardContainer";
import { connect } from "react-redux";
import {
  changedStatusTC,
  changeStatusAC,
  getProfileDataTC,
  rewriteProfileAC,
} from "../../../redux/profile-reducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import ProfileData from "./ProfileData";

export {
  useEffect,
  Preloader,
  ProfileCardContainer,
  connect,
  changedStatusTC,
  changeStatusAC,
  getProfileDataTC,
  rewriteProfileAC,
  withRouter,
  withAuthRedirect,
  compose,
  ProfileData,
};
