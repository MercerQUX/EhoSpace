import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-use";
import {
  dialogsSelectedUser,
  ownDialogsMessages,
} from "../../../store/reselectors/dialogs-selector";
import style from "../dialogs.module.sass";
import { FormMessage } from "../../../UI/FormChat/FormMessage";
import { getAuthID } from "../../../store/reselectors/auth-selector";
import { useCallback, useEffect } from "react";
import { fetchChatMessages } from "../../../store/thunks/dialogs-thunk";
import { SingleMessage } from "./SingleMessage";
import { ChatPreview } from "../../../asset/common/ChatPreview";
import { HeaderMessageBlock } from "./HeaderMessageBlock";
import { dialogsAction } from "../../../store/reducers/dialogsSlice";

export const MessageBlock: React.FC = () => {
  const { activeDialogs, dispatch, messages, loggedID, selectedUser } = {
    activeDialogs: useParams().userID,
    dispatch: useAppDispatch(),
    messages: useAppSelector(ownDialogsMessages),
    loggedID: useAppSelector(getAuthID),
    selectedUser: useAppSelector(dialogsSelectedUser),
  };

  const fetchMessages = useCallback(() => {
    dispatch(
      fetchChatMessages({ idSender: loggedID, idAdress: activeDialogs })
    );
  }, [loggedID, activeDialogs, dispatch]);

  const selectActiveDialog = useCallback(() => {
    dispatch(dialogsAction.selectActiveDialogs(activeDialogs));
  }, [activeDialogs, dispatch]);

  useEffect(() => {
    selectActiveDialog();
    fetchMessages();
  }, [activeDialogs, loggedID, fetchMessages]);

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
        <HeaderMessageBlock dataPerson={selectedUser} />
      ) : (
        <div className={style.headerMessage}>
          <span className={style.fullNameDialog}>Welcome</span>
        </div>
      )}

      <div className={style.userMessage}>{mapMessage}</div>
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
