import style from "../asset.module.css";
import animation from "../chat-preview.svg";
export const ChatPreview = () => {
  return (
    <div>
      <img className={style.chatPreview} src={animation} alt="" />
    </div>
  );
};
