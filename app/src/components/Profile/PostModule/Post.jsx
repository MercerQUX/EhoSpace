import style from "../../CSS/profile.module.css";

const Post = (props) => {
  return (
    <div className={style.wrapperPost}>
      <img
        src="https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg"
        alt="aaa"
      />
      <p>{props.text}</p>
    </div>
  );
};

export default Post;
