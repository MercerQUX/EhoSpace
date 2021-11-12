import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React, { JSXElementConstructor } from "react";
import { RootState } from "../../redux/redux-store";

export const withAuthRedirect = (Component:JSXElementConstructor<any>) => {
  const RedirectComponent = (props:any) => {
    if (props.isAuth) {
      return <Component {...props} />;
    } else {
      {
        return <Redirect to="/login" />;
      }
    }
  };
  return connect((state:RootState) => ({ isAuth: state.authenticator.isAuth }))(
    RedirectComponent
  );
};
