import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { actualLoggedUserTC, logOutTC } from "../../redux/auth-creators";

import { AppDispatch, RootState } from "../../redux/redux-store";
import Header from "./Header";

type TStateProps = {
  login: string;
  isAuth: boolean;
};
type TDispatchProps = {
  actualLoggedUser: () => void;
  logOut: () => void;
};

type defaultProps = TStateProps & TDispatchProps;

const HeaderContainer: React.FC<defaultProps> = ({
  actualLoggedUser,
  ...props
}) => {
  actualLoggedUser();
  return <Header {...props} />;
};

const HeaderConnect = connect(
  (state: RootState) => ({
    login: state.authenticator.login,
    isAuth: state.authenticator.isAuth,
  }),
  (dispatch: AppDispatch) => ({
    actualLoggedUser: () => dispatch(actualLoggedUserTC()),
    logOut: () => dispatch(logOutTC()),
  })
);

export default compose<defaultProps>(HeaderConnect)(HeaderContainer);
