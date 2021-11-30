import { Navigate } from "react-router-dom";
import React, { JSXElementConstructor } from "react"
import { useAppSelector } from "../hooks/redux-use";
import { isAuthInitialization } from "../store/reselectors/auth-selector";

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
        return <Component {...props} />;
        //return <Navigate to="/login" />;
      }
    }
  };
  return RedirectComponent
};
