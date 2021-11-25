import { Navigate } from "react-router-dom";
import { AuthForms } from "../../UI/FormAuth/FormsAuth";

interface defaultProps {
  indentifyData: (login: string, password: string) => void;
  isAuth: boolean;
  error: null | string;
}

const Login = ({ indentifyData, isAuth, error }: defaultProps) => {
  return isAuth ? (
    <Navigate to={"/profile"} />
  ) : (
    <div>
      <AuthForms error={error} indentifyData={indentifyData} />
    </div>
  );
};

export default Login;
