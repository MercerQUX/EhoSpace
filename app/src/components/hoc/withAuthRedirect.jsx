import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    console.log(props)
    if (props.isAuth) {
      return <Component {...props} />;
    } else {
      {
        return <Redirect to="/login" />;
      }
    }
  };
  return connect((state) => ({ isAuth: state.authenticator.isAuth }))(
    RedirectComponent
  );
};
