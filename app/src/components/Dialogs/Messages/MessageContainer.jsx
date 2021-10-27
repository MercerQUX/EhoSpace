import Messages from "./Message";
import SingleMessage from "./SingleMessage";
import {
  addMessageAction,
  changeInputMessageAction,
} from "../../../redux/dialogs-reducer";

const MessageContainer = (props) => {
  let state = props.store.getState().pageDialogs;

  let mapMessages = state.dialogsMessages.map((item) => (
    <SingleMessage body={item.body} />
  ));

  const addMessage = () => {
    props.store.dispatch(addMessageAction());
  };
  const changeInputMessage = (text) => {
    props.store.dispatch(changeInputMessageAction(text));
  };

  return (
    <div>
      <Messages
        messageElements={mapMessages}
        addMessage={addMessage}
        changeInputMessage={changeInputMessage}
        state={state}
      />
    </div>
  );
};

export default MessageContainer;
