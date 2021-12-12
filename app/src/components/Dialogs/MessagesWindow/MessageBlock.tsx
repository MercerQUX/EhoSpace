import { useParams } from "react-router";
import { useAppSelector } from "../../../hooks/redux-use";
import {
  dialogsMessages,
  dialogsUsers,
} from "../../../store/reselectors/dialogs-selector";
import style from "../dialogs.module.css";
import { FormMessage } from "../../../UI/FormChat/FormMessage";
import cn from "classnames";

export const MessageBlock: React.FC<{}> = ({}) => {
  const activeDialogs = useParams().userID;
  const { dialogs, messages } = {
    dialogs: useAppSelector(dialogsUsers),
    messages: useAppSelector(dialogsMessages),
  };
  const dataDialogs = dialogs.filter(
    (user) => user.id == Number(activeDialogs)
  )[0];

  let chatName;
  if (dataDialogs) {
    let nickname = dataDialogs.nickname ? `(${dataDialogs.nickname})` : "";
    chatName = `${dataDialogs.name} ${dataDialogs.surname} ${nickname}`;
  } else {
    chatName = `Selected User`;
  }

  let mapMessage = messages.map((mes) => {
    let ownMessage = mes.other ? style.messageOther : null;
    return (
      <div className={style.containerMessage}>
        <div className={cn(style.singleMessage, ownMessage)}>
          <span className={style.messageBody}>{mes.body}</span>
          <span className={style.messageTime}>{mes.timestamp}</span>
        </div>
      </div>
    );
  });

  return (
    <div className={style.wrapperContactsMessage}>
      <div className={style.headerMessage}>
        <span className={style.fullNameDialog}>{chatName}</span>
        <span className={style.statusChat}>Offline</span>
      </div>
      <div className={style.userMessage}>{mapMessage}</div>
      <div className={style.footerMessage}>
        <FormMessage />
      </div>
    </div>
  );
};
