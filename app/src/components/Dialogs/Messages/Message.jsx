import style from "../../CSS/dialogs.module.css";

const Messages = (props) => {
  return (
    <div className={style.wrapperMessages}>
      {props.messageElements}
      <div className={style.messageTextArea}>
        <textarea
          value={props.state.newTextMessage}
          onChange={(e) => props.changeInputMessage(e.target.value)}
        ></textarea>
        <button onClick={() => props.addMessage()}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
