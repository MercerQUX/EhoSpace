import style from "../../CSS/profile.module.css";
import Post from "./Post";

const PostCreater = (props) => {
  let mapPost = props.posts.map((item) => <Post text={item.body} />);

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
      <div>{mapPost}</div>
    </div>
  );
};

export default PostCreater;
