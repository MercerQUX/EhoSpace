import styleM from "../../main.module.css";
import style from "./dialogs.module.css";
import cn from "classnames";
import { DialogsBlock } from "./DialogsWindow/DialogsBlock";
import { MessageBlock } from "./MessagesWindow/MessageBlock";

const Dialogs = () => {
  return (
    <div className={cn(style.wrapperDialog)}>
      <DialogsBlock />
      <MessageBlock />
    </div>
  );
};
export default Dialogs;
