import style from "../dialogs.module.css";

export const MessageBlock: React.FC<{}> = ({}) => {
  return (
    <div className={style.wrapperContactsMessage}>
      <div className={style.headerMessage}>
        <span className={style.fullNameDialog}>Name Surname (Nickname)</span>
        <span className={style.statusChat}>Offline</span>
      </div>
      <div className={style.userMessage}></div>
      <div className={style.footerMessage}>
        <div>
          <div className="textarea"></div>
        </div>
      </div>
    </div>
  );
};
