import { Field, Formik, Form } from "formik";
import { ValidMessageSchema } from "../validation/validators";

interface IDefaultProps {
  addMessage: (value: string) => CallableFunction;
}

export const FormMessage = ({ addMessage }: IDefaultProps) => {
  const startValue = { bodyMessage: "" };
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
        return <Fields/>;
      }}
    </Formik>
  );
};

const Fields = () => {
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
