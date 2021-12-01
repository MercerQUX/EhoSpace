import { Field, Formik, Form } from "formik";
import { useAppDispatch } from "../../hooks/redux-use";
import { dialogsAction } from "../../store/reducers/dialogsSlice";
import { ValidMessageSchema } from "../../services/validation/validators";

export const FormMessage = () => {
  const startValue = { bodyMessage: "" };
  const dispatch = useAppDispatch();
  const { addMessage } = dialogsAction;
  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values, actions) => {
        dispatch(addMessage(values.bodyMessage));
        actions.resetForm({
          values: {
            bodyMessage: "",
          },
        });
      }}
      validationSchema={ValidMessageSchema}
    >
      {(...formikProps) => {
        return <Fields />;
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
