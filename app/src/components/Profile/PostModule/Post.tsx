import style from "../profile.module.css";

type defaultProps = {
  name: string;
  surname: string;
  img: string;
  text: string;
};
export const Post: React.FC<defaultProps> = ({ name, surname, img, text }) => {
  return (
    <div className={style.wrapperPost}>
      <img src={img} alt="aaa" />
      <div>
        <span className={style.postContent}>{`${name} ${surname}`}</span>
        <br />
        <span className={style.postTime}>00:00:00 08/11/21</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

