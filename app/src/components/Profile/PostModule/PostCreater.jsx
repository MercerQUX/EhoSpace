import style from "../../CSS/profile.module.css";

const PostCreater = (props) => {
  return (
    <div className={style.wrapperCreaterPost}>
      <h2>My Post</h2>
      <div>
        <textarea
          onChange={(e) => props.changeInputPost(e.target.value)}
          value={props.state.pageProfile.newTextPost}
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
