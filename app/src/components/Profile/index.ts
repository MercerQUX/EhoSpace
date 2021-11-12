import { useEffect } from "react";
import Preloader from "../common/Preloader";
import { connect } from "react-redux";
import {
  sendRewriteProfileTC,
  changeStatusAC,
  getProfileDataTC,
  rewriteProfileAC,
} from "../../redux/profile-creators";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

export {
  useEffect,
  Preloader,
  connect,
  sendRewriteProfileTC,
  changeStatusAC,
  getProfileDataTC,
  rewriteProfileAC,
  withRouter,
  withAuthRedirect,
  compose,
};
