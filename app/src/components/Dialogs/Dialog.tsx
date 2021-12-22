import style from "./dialogs.module.css";
import styleMain from "../../main.module.sass"
import cn from "classnames";
import { DialogsBlock } from "./DialogsWindow/DialogsBlock";
import { MessageBlock } from "./MessagesWindow/MessageBlock";

const Dialogs = () => {
  return (
    <div className={cn(style.wrapperDialog,styleMain.dialogs)}>
      <DialogsBlock />
      <MessageBlock />
    </div>
  );
};
export default Dialogs;
