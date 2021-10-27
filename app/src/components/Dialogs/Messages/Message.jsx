import style from "../../CSS/dialogs.module.css";
import SingleMessage from "../Messages/SingleMessage";

const Messages = (props) => {
  return (
    <div className={style.wrapperMessages}>
      {props.dialogsMessages.map((item) => (
        <SingleMessage body={item.body} />
      ))}
      <div className={style.messageTextArea}>
        <textarea
          value={props.newText}
          onChange={(e) => props.changeInputMessage(e.target.value)}
        ></textarea>
        <button onClick={() => props.addMessage()}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
