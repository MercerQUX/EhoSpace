import style from "../profile.module.sass";

type defaultProps = {
  name: string;
  surname: string;
  img: string;
  text: string;
  time: string;
};
export const Post: React.FC<defaultProps> = ({
  name,
  surname,
  img,
  text,
  time,
}) => {
  return (
    <div className={style.wrapperPost}>
      <img src={img} alt="aaa" />
      <div className={style.container_content}>
        <span className={style.post_fullname}>{`${name} ${surname}`}</span>
        <br />
        <span className={style.postTime}>{time}</span>
        <p>{text}</p>
      </div>
    </div>
  );
};
