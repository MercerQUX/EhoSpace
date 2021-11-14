import style from "../../CSS/dialogs.module.css";
import SingleMessage from "./SingleMessage";
import { dialogsMessagesType } from "../../../redux/types/ReducersTypes";
import { FormMessage } from "../../../UI/FormChat/FormMessage";

type defaultProps = {
  dialogsMessages: Array<dialogsMessagesType>;
  addMessage: (value: string) => CallableFunction;
};

const Messages: React.FC<defaultProps> = ({ dialogsMessages, addMessage }) => {
  let mapMessages = dialogsMessages.map((item) => (
    <SingleMessage body={item.body} />
  ));

  return (
    <div className={style.wrapperMessages}>
      {mapMessages}
      <div className={style.messageTextArea}>
        <FormMessage addMessage={addMessage} />
      </div>
    </div>
  );
};

export default Messages;
