import { dialogsMessagesType, SingleMessage, FormMessage } from "..";
import style from "../dialogs.module.css";

type defaultProps = {
  dialogsMessages: Array<dialogsMessagesType>;
  addMessage: (value: string) => CallableFunction;
};

export const Messages: React.FC<defaultProps> = ({
  dialogsMessages,
  addMessage,
}) => {
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
