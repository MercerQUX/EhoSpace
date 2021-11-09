import style from "../../CSS/profile.module.css";

const Post = ({ name, surname, img, text }) => {
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

export default Post;
