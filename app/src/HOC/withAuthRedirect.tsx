import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import React, { JSXElementConstructor } from "react";
import { RootState } from "../redux/redux-store";

interface componentProps {}

interface hocProps {
  isAuth: boolean;
}

export const withAuthRedirect = (
  Component: JSXElementConstructor<componentProps>
) => {
  const RedirectComponent = ({
    isAuth,
    ...props
  }: hocProps & componentProps) => {
    if (isAuth) {
      return <Component {...props} />;
    } else {
      {
        return <Navigate to="/login" />;
      }
    }
  };
  return connect((state: RootState) => ({
    isAuth: state.authenticator.isAuth,
  }))(RedirectComponent);
};
