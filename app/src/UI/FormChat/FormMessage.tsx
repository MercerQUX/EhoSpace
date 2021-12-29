import { Field, Formik, Form } from "formik";
import { useAppDispatch } from "../../hooks/redux-use";
import { ValidMessageSchema } from "../../services/validation/validators";
import style from "../forms.module.sass";
import { sendMessages } from "../../store/thunks/dialogs-thunk";
import { handleClickKey } from "../../helpers/handleClickKey";

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
        return <Fields {...formikProps[0]} />;
      }}
    </Formik>
  );
};

const Fields = ({ handleSubmit }: any) => {
  return (
    <Form className={style.wrapperChatForm}>
      <Field
        name={"bodyMessage"}
        placeholder={"Your message..."}
        as="textarea"
        className={style.chat_textarea}
        onKeyPress={(e) => handleClickKey(e,handleSubmit)}
      />
      <button type="submit" className={style.chat_button}>Send</button>
    </Form>
  );
};
