import { Field, reduxForm, reset } from "redux-form";
import { required, maxLength150 } from "../../../UI/form/validation/validators";
import { FormControl } from "../../../UI/form/FormControl";
import style from "../../CSS/dialogs.module.css";
import SingleMessage from "../Messages/SingleMessage";

const Messages = ({ dialogsMessages, addMessage }) => {
  let mapMessages = dialogsMessages.map((item) => (
    <SingleMessage body={item.body} />
  ));

  return (
    <div className={style.wrapperMessages}>
      {mapMessages}
      <div className={style.messageTextArea}>
        <MessageReduxForm onSubmit={(values) => addMessage(values)} />
      </div>
    </div>
  );
};

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={FormControl}
        name={"addMessage"}
        placeholder={"Your message..."}
        type={"textarea"}
        dataType={"textarea"}
        validate={[required, maxLength150]}
      />
      <button>Send</button>
    </form>
  );
};

const MessageReduxForm = reduxForm({
  form: "dialogMessageForm",
  onSubmitSuccess: (res, dispatch) => dispatch(reset("dialogMessageForm")),
})(MessageForm);

export default Messages;
