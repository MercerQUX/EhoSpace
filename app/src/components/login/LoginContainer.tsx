import { indentifyDataTC } from "../../redux/auth-creators";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppDispatch, RootState } from "../../redux/redux-store";
import Login from "./Login";

let LoginConnect = connect(
  (state: RootState) => ({
    isAuth: state.authenticator.isAuth,
    error: state.authenticator.error
  }),
  (dispatch: AppDispatch) => ({
    indentifyData: (login: string, password: string) =>
      dispatch(indentifyDataTC(login, password)),
  })
);

let LoginContainer = compose(LoginConnect)(Login);
export default LoginContainer;
