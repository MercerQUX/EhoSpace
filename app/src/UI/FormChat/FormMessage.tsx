import { Field, Formik, Form } from "formik";
import { useAppDispatch } from "../../hooks/redux-use";
import { dialogsAction } from "../../store/reducers/dialogsSlice";
import { ValidMessageSchema } from "../../services/validation/validators";
import style from "../forms.module.css";

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
    <Form className={style.wrapperChatForm}>
      <Field
        name={"bodyMessage"}
        placeholder={"Your message..."}
        as="textarea"
        className={style.chat_textarea}
      />
      <button className={style.chat_btn}>Send</button>
    </Form>
  );
};
