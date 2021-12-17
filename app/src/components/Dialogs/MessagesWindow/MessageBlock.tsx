import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-use";
import {
  dialogsUsers,
  ownDialogsMessages,
} from "../../../store/reselectors/dialogs-selector";
import style from "../dialogs.module.css";
import { FormMessage } from "../../../UI/FormChat/FormMessage";
import { getAuthID } from "../../../store/reselectors/auth-selector";
import { useCallback, useEffect } from "react";
import { fetchChatMessages } from "../../../store/thunks/dialogsThunks";
import { SingleMessage } from "./SingleMessage";
import { ChatPreview } from "../../../asset/common/ChatPreview";

export const MessageBlock: React.FC = () => {
  const activeDialogs = useParams().userID;
  const dispatch = useAppDispatch();
  const { dialogs, messages, loggedID } = {
    dialogs: useAppSelector(dialogsUsers),
    messages: useAppSelector(ownDialogsMessages),
    loggedID: useAppSelector(getAuthID),
  };
  const fetchMessages = useCallback(() => {
    dispatch(
      fetchChatMessages({ idSender: loggedID, idAdress: activeDialogs })
    );
  }, [loggedID, activeDialogs, dispatch]);

  const dataDialogs = dialogs.filter(
    (user) => user.id === Number(activeDialogs)
  )[0];
  useEffect(() => {
    fetchMessages();
  }, [activeDialogs, loggedID, fetchMessages]);

  let chatName;
  if (dataDialogs) {
    let nickname = dataDialogs.nickname ? `(${dataDialogs.nickname})` : "";
    chatName = `${dataDialogs.name} ${dataDialogs.surname} ${nickname}`;
  } else {
    chatName = `Selected User`;
  }

  let mapMessage = messages.map((mes) => {
    return (
      <SingleMessage
        key={mes.id}
        messagePosition={mes.other}
        bodyMessage={mes.body}
        timeStamp={mes.timestamp}
      />
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

      <div className={style.userMessage}>
        {mapMessage}
      </div>
      {!activeDialogs && (
        <div className={style.untilSelectText}>
          <span>
            Hi! To use the chat application, you can click here and select a
            user!
          </span>
          <ChatPreview />
        </div>
      )}

      <div className={style.footerMessage}>
        {activeDialogs ? (
          <FormMessage idSender={loggedID} adressID={activeDialogs} />
        ) : null}
      </div>
    </div>
  );
};
