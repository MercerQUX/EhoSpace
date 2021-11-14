import { DialogsWindowContainer, MessageContainer } from ".";
import style from "../../main.module.css";
import styleD from "./dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={`${style.profile} ${styleD.wrapperDialog}`}>
      <DialogsWindowContainer />
      <MessageContainer />
    </div>
  );
};
export default Dialogs;
