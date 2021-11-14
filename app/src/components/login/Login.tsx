import style from "../CSS/main.module.css";
import { Redirect } from "react-router";
import { FormLogin } from "../../UI/FormAuth/FormLogin";

interface defaultProps {
  indentifyData: (login: string, password: string) => void;
  isAuth: boolean;
  error: null | string
}

const Login = ({ indentifyData, isAuth, error }: defaultProps) => {
  const onSubmit = (formData: any) => {
    indentifyData(formData.login, formData.password);
  };
  return isAuth ? (
    <Redirect to={"/profile"} />
  ) : (
    <div className={style.profile}>
      <FormLogin error={error} indentifyData={indentifyData}/>
    </div>
  );
};

export default Login;
