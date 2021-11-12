import { Field, reduxForm, reset } from "redux-form";
import { required, maxLength150 } from "../../../UI/form/validation/validators";
import { FormControl } from "../../../UI/form/FormControl";
import style from "../../CSS/dialogs.module.css";
import SingleMessage from "./SingleMessage";
import { dialogsMessagesType } from "../../../redux/types/ReducersTypes";
import { AppDispatch } from "../../../redux/redux-store";

type defaultProps = {
  dialogsMessages: Array<dialogsMessagesType>;
  addMessage: (value:string) => CallableFunction;
};

const Messages:React.FC<defaultProps> = ({ dialogsMessages, addMessage }) => {
  let mapMessages = dialogsMessages.map((item) => (
    <SingleMessage body={item.body} />
  ));

  return (
    <div className={style.wrapperMessages}>
      {mapMessages}
      <div className={style.messageTextArea}>
        <MessageReduxForm onSubmit={(values:any)=> addMessage(values)} />
      </div>
    </div>
  );
};

const MessageForm = (props:any) => {
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
  onSubmitSuccess: (res, dispatch:AppDispatch) => dispatch(reset("dialogMessageForm")),
})(MessageForm);

export default Messages;
