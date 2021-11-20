import { Redirect } from "react-router";
import { AuthForms } from "../../UI/FormAuth/FormsAuth";

interface defaultProps {
  indentifyData: (login: string, password: string) => void;
  isAuth: boolean;
  error: null | string;
}

function ide<T,U>(params:T, message:U):U {
  return message;
}
ide<number,string>(44,"dawdwa")

const Login = ({ indentifyData, isAuth, error }: defaultProps) => {
  return isAuth ? (
    <Redirect to={"/profile"} />
  ) : (
    <div>
      <AuthForms error={error} indentifyData={indentifyData} />
    </div>
  );
};

export default Login;
