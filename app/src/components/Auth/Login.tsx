import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import { getAuthLogin, isAuthInitialization } from "../../store/reselectors/auth-selector";
import { AuthForms } from "../../UI/FormAuth/FormsAuth";


const Login = () => {
  const { isAuth} = {
    isAuth: useAppSelector(isAuthInitialization),
  };
  return isAuth ? (
    <Navigate to={"/profile"} />
  ) : (
    <div>
      <AuthForms />
    </div>
  );
};

export default Login;
