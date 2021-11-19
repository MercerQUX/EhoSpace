import { Field, Form, Formik } from "formik";
import style from "../forms.module.css";
import { ValidRegisterFormSchema } from "../validation/validators";

export const FormRigister = () => {
  const startValue = {
    login: "",
    email: "",
    name: "",
    surname: "",
    country: "",
    password: "",
  };
  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={ValidRegisterFormSchema}
    >
      {({ ...formikProps }) => {
        return <FieldRegister {...formikProps} />;
      }}
    </Formik>
  );
};

const FieldRegister = ({ errors, touched }) => {
  const alternateСallErrors =
    (touched.login ? errors.login : null) ||
    (touched.email ? errors.email : null) ||
    (touched.name ? errors.name : null) ||
    (touched.surname ? errors.surname : null) ||
    (touched.country ? errors.country : null) ||
    (touched.password ? errors.password : null);
  return (
    <Form action="##" className={style.form} id="SignUp">
      <h2 className={style.form__title}>Sign Up</h2>
      <Field
        type="text"
        placeholder="Your Login"
        name="login"
        className={`${style.input} ${
          touched.login && errors.login ? style.input__error : null
        }`}
      />
      <Field
        type="text"
        placeholder="Your Email"
        name="email"
        className={`${style.input} ${
          touched.email && errors.email ? style.input__error : null
        }`}
      />
      <Field
        type="text"
        placeholder="Your Name"
        name="name"
        className={`${style.input} ${
          touched.name && errors.name ? style.input__error : null
        }`}
      />
      <Field
        type="text"
        placeholder="Your Surname"
        name="surname"
        className={`${style.input} ${
          touched.surname && errors.surname ? style.input__error : null
        }`}
      />
      <Field
        type="text"
        placeholder="Your Country"
        name="country"
        className={`${style.input} ${
          touched.country && errors.country ? style.input__error : null
        }`}
      />
      <Field
        type="password"
        placeholder="Password"
        name="password"
        className={`${style.input} ${
          touched.password && errors.password ? style.input__error : null
        }`}
      />
      <span className={style.error}>{alternateСallErrors}</span>
      <button type="submit" className={style.btn}>
        Sign Up
      </button>
    </Form>
  );
};
