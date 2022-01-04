import style from "../dialogs.module.sass";
import cn from "classnames";

interface defaultProps {
  messagePosition: boolean;
  bodyMessage: string;
  timeStamp: string;
}

export const SingleMessage: React.FC<defaultProps> = ({
  messagePosition,
  bodyMessage,
  timeStamp,
}) => {
  let ownMessage = messagePosition ? style.messageOther : null;
  return (
    <div className={style.containerMessage}>
      <div className={cn(style.singleMessage, ownMessage)}>
        <span className={style.messageBody}>{bodyMessage}</span>
        <span className={style.messageTime}>{timeStamp}</span>
      </div>
    </div>
  );
};

