import { useAppSelector } from "../../../hooks/redux-use";
import { dialogsMessages } from "../../../store/reselectors/dialogs-selector";
import { FormMessage } from "../../../UI/FormChat/FormMessage";
import style from "../dialogs.module.css";
import { SingleMessage } from "./SingleMessage";

type defaultProps = {};

export const Messages: React.FC<defaultProps> = ({}) => {
  const message = useAppSelector(dialogsMessages);
  let mapMessages = message.map((item) => <SingleMessage key={item.id} body={item.body} />);

  return (
    <div className={style.wrapperMessages}>
      {mapMessages}
      <div className={style.messageTextArea}>
        <FormMessage />
      </div>
    </div>
  );
};
