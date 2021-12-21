import { Field, Formik, Form } from "formik";
import { useAppDispatch } from "../../hooks/redux-use";
import { ValidMessageSchema } from "../../services/validation/validators";
import style from "../forms.module.css";
import { sendMessages } from "../../store/thunks/dialogs-thunk";

interface IDefaultProps {
  idSender: number;
  adressID?: string;
}

export const FormMessage = ({ idSender, adressID }: IDefaultProps) => {
  const startValue = { bodyMessage: "" };
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values, actions) => {
        if (adressID) {
          dispatch(
            sendMessages({
              idSender: idSender,
              idAdress: Number(adressID),
              messageBody: values.bodyMessage,
            })
          );
        }
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
