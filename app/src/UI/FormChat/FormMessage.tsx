import { Field, Formik, Form } from "formik";
import { ValidMessageSchema } from "../validation/validators";

interface initValueType {
  bodyMessage: string;
}
interface defaultProps {
  addMessage: (value: string) => CallableFunction;
}
interface formikProps {}

export const FormMessage = ({ addMessage }: defaultProps) => {
  const startValue: initValueType = { bodyMessage: "" };
  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values, actions) => {
        addMessage(values.bodyMessage);
        actions.resetForm({
          values: {
            bodyMessage: "",
          },
        });
      }}
      validationSchema={ValidMessageSchema}
    >
      {(...formikProps) => {
        return <Fields {...formikProps} />;
      }}
    </Formik>
  );
};

const Fields = ({}: formikProps) => {
  return (
    <Form>
      <Field
        name={"bodyMessage"}
        placeholder={"Your message..."}
        as="textarea"
      />
      <button>Send</button>
    </Form>
  );
};
