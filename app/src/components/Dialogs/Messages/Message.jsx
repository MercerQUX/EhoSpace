import style from "../../CSS/dialogs.module.css";
import SingleMessage from "../Messages/SingleMessage";

const Messages = (props) => {
  let mapMessages = props.dialogsMessages.map((item) => (
    <SingleMessage body={item.body} />
  ));

  return (
    <div className={style.wrapperMessages}>
      {mapMessages}
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
