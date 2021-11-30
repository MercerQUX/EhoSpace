import style from "../../main.module.css";
import styleD from "./dialogs.module.css";
import cn from "classnames";
import { WindowDialog } from "./DialogsWindow/WindowDialog";
import { Messages } from "./Messages/Message";

const Dialogs = () => {
  return (
    <div className={cn(style.profile, styleD.wrapperDialog)}>
      <WindowDialog />
      <Messages />
    </div>
  );
};
export default Dialogs;
