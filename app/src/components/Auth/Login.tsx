import { Navigate } from "react-router-dom";
import { Preloader } from "../../asset/common/Preloader";
import { useAppSelector } from "../../hooks/redux-use";
import {
  stateAuthIsLoading,
  stateAuthIsInitialization,
} from "../../store/reselectors/auth-selector";
import { AuthForms } from "../../UI/FormAuth/FormsAuth";
import styleMain from "../../main.module.sass"

const Login = () => {
  const { isAuth, isLoading } = {
    isAuth: useAppSelector(stateAuthIsInitialization),
    isLoading: useAppSelector(stateAuthIsLoading),
  };
  return isAuth ? (
    <Navigate to={"/profile"} />
  ) : (
    <div className={styleMain.login}>{isLoading ? <Preloader /> : <AuthForms />}</div>
  );
};

export default Login;
