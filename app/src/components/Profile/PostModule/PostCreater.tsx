import { useAppSelector } from "../../../hooks/redux-use";
import { profileAction } from "../../../store/reducers/profileSlice";
import {
  getPosts,
  getProfile,
} from "../../../store/reselectors/profile-selector";
import { FormCreatePost } from "../../../UI/FormCreatePost/FormCreatePost";
import style from "../profile.module.css";
import { Post } from "./Post";

export const PostCreater: React.FC = () => {
  const { posts, profile } = {
    posts: useAppSelector(getPosts),
    profile: useAppSelector(getProfile),
  };
  const addPost = profileAction.addPost;
  let map = () => {
    if (profile === null) {
      return <h2 className={style.loading}>Loading...</h2>;
    } else if (posts.length === 0) {
      return <h2>У вас нет ни одного поста!</h2>;
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
