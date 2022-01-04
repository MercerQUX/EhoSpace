import { dialogsUsersType } from "../../../models/IDialogs";
import style from "../dialogs.module.sass";

export const HeaderMessageBlock: React.FC<{ dataPerson: dialogsUsersType }> = ({
  dataPerson,
}) => {
  let chatName;
  if (dataPerson) {
    let nickname = dataPerson.nickname ? `(${dataPerson.nickname})` : "";
    chatName = `${dataPerson.name} ${dataPerson.surname} ${nickname}`;
  } else {
    chatName = `Selected User`;
  }

  return (
    <div className={style.headerMessage}>
      <span className={style.fullNameDialog}>{chatName}</span>
      <span className={style.statusChat}>Offline</span>
    </div>
  );
};
