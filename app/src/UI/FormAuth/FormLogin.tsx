import { Formik, Form, Field } from "formik";
import { validLoginFormSchema } from "../validation/validators";

interface initialValue {
  login: string;
  password: string;
  rememberme: boolean;
}
interface defaultProps {
  error: null | string;
  indentifyData: (login: string, password: string) => any;
}
interface formikProps {
  errors: { login?: string; password?: string };
  error: null | string;
}

export const FormLogin = ({ indentifyData, error }: defaultProps) => {
  const startValue: initialValue = {
    login: "",
    password: "",
    rememberme: false,
  };
  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values) => {
        indentifyData(values.login, values.password);
      }}
      validationSchema={validLoginFormSchema}
    >
      {({ ...formikProps }) => {
        return <Fields error={error} {...formikProps} />;
      }}
    </Formik>
  );
};

const Fields = ({ errors, error }: formikProps) => {
  return (
    <Form>
      <div>
        <Field placeholder="Login" name="login" />
        <br />
      </div>
      <div>
        <Field type="password" placeholder="Password" name="password" />
        <br />
      </div>
      <div>
        <Field type="checkbox" name="rememberme" />
        Remember Me
      </div>
      <span>{errors.login || errors.password || error}</span>
      <div>
        <button>Send</button>
      </div>
    </Form>
  );
};
