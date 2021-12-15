import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-use";
import {
  dialogsUsers,
  ownDialogsMessages,
} from "../../../store/reselectors/dialogs-selector";
import style from "../dialogs.module.css";
import { FormMessage } from "../../../UI/FormChat/FormMessage";
import cn from "classnames";
import { getAuthID } from "../../../store/reselectors/auth-selector";
import { useEffect } from "react";
import { fetchChatMessages } from "../../../store/thunks/dialogsThunks";

export const MessageBlock: React.FC<{}> = ({}) => {
  const activeDialogs = useParams().userID;
  const dispatch = useAppDispatch();
  const { dialogs, messages, loggedID } = {
    dialogs: useAppSelector(dialogsUsers),
    messages: useAppSelector(ownDialogsMessages),
    loggedID: useAppSelector(getAuthID),
  };
  const dataDialogs = dialogs.filter(
    (user) => user.id == Number(activeDialogs)
  )[0];
  useEffect(() => {
    dispatch(
      fetchChatMessages({ idSender: loggedID, idAdress: activeDialogs })
    );
  }, [activeDialogs, loggedID]);

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
      {activeDialogs ? (
        <div className={style.headerMessage}>
          <span className={style.fullNameDialog}>{chatName}</span>
          <span className={style.statusChat}>Offline</span>
        </div>
      ) : (
        <div className={style.headerMessage}>
          <span className={style.fullNameDialog}>Welcome</span>
        </div>
      )}
      <div className={style.userMessage}>{mapMessage}</div>
      <div className={style.footerMessage}>
        {activeDialogs ? (
          <FormMessage idSender={loggedID} adressID={activeDialogs} />
        ) : null}
      </div>
    </div>
  );
};
