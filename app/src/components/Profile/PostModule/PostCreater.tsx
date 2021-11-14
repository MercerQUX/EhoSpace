import style from "../../CSS/profile.module.css";
import Post from "./Post";
import { profileType } from "../../../redux/types/ReducersTypes";
import { FormCreatePost } from "../../../UI/FormCreatePost/FormCreatePost";

interface defaultProps {
  posts: Array<any>;
  addPost: (values: string) => void;
  profile: profileType;
}

const PostCreater: React.FC<defaultProps> = ({ posts, addPost, profile }) => {
  let map = () => {
    if (profile == null) {
      return <h2 className={style.loading}>Loading...</h2>;
    } else {
      return posts.map((item) => {
        return (
          <Post
            name={profile.name}
            surname={profile.surname}
            img={profile.avatar}
            text={item.body}
          />
        );
      });
    }
  };

  return (
    <div className={style.wrapperCreaterPost}>
      <div>
        <h2>My Post</h2>
        <FormCreatePost addPost={addPost} />
      </div>
      {<div className={style.posts}>{map()}</div>}
    </div>
  );
};

export default PostCreater;
