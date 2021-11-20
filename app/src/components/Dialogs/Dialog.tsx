import { DialogsWindowContainer, MessageContainer } from ".";
import style from "../../main.module.css";
import styleD from "./dialogs.module.css";
import cn from "classnames";

const Dialogs = () => {
  return (
    <div className={cn(style.profile, styleD.wrapperDialog)}>
      <DialogsWindowContainer />
      <MessageContainer />
    </div>
  );
};
export default Dialogs;
