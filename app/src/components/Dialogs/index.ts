export { MessageContainer } from "./Messages/MessageContainer";
export { DialogsWindowContainer } from "./DialogsWindow/DialogsWindowContainer";
export { addMessageAC } from "../../redux/dialogs-reducer/dialogs-creators";
export { SingleMessage } from "./Messages/SingleMessage";
export { FormMessage } from "../../UI/FormChat/FormMessage";
export { SingleDialog } from "./DialogsWindow/SingleDialog";

export type { AppDispatch, RootState } from "../../redux/redux-store";
export type {
  dialogsMessagesType,
  dialogsUsersType,
} from "../../redux/types/ReducersTypes";
