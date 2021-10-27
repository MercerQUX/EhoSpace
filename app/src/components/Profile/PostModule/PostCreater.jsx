import style from "../../CSS/profile.module.css";

const PostCreater = (props) => {
  return (
    <div className={style.wrapperCreaterPost}>
      <h2>My Post</h2>
      <div>
        <textarea
          value={props.newText}
          onChange={(e) => props.changeInputPost(e.target.value)}
        ></textarea>
      </div>
      <div className={style.wrapperButPost}>
        <button
          onClick={() => {
            props.addPost();
          }}
        >
          Posting Post
        </button>
        <button>Remove Post</button>
      </div>
    </div>
  );
};

export default PostCreater;
