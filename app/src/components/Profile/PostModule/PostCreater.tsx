import { useAppSelector } from "../../../hooks/redux-use";
import { profileAction } from "../../../store/reducers/profileSlice";
import {
  stateProfileIsOwner,
  stateProfilePosts,
  stateProfile,
} from "../../../store/reselectors/profile-selector";
import { FormCreatePost } from "../../../UI/FormCreatePost/FormCreatePost";
import style from "../profile.module.sass";
import { Post } from "./Post";

export const PostCreater: React.FC = () => {
  const { posts, profile, isOwnerProfile, addPost } = {
    posts: useAppSelector(stateProfilePosts),
    profile: useAppSelector(stateProfile),
    isOwnerProfile: useAppSelector(stateProfileIsOwner),
    addPost: profileAction.addPost,
  };

  let postControll = () => {
    if (profile === null) {
      return <h2 className={style.loading}>Loading...</h2>;
    } else if (posts.length === 0 && !isOwnerProfile) {
      return <h2 className={style.text_head}>This user has no posts yet.</h2>;
    } else if (posts.length === 0 && isOwnerProfile) {
      return (
        <h2 className={style.text_head}>
          You don't have any posts yet, leave your post so that others know more
          about you!
        </h2>
      );
    } else {
      return posts
        .map((item) => {
          return (
            <Post
              key={item.id}
              name={profile.name}
              surname={profile.surname}
              img={profile.avatar}
              text={item.body}
              time={item.timestamp}
            />
          );
        })
        .reverse();
    }
  };

  return (
    <div className={style.wrapperCreaterPost}>
      {isOwnerProfile ? (
        <div>
          <h2 className={style.text_head}>My Post</h2>
          <FormCreatePost addPost={addPost} />
        </div>
      ) : (
        <div>
          <h2 className={style.text_head}>{profile?.name + `'`} Posts</h2>
        </div>
      )}
      {<div className={style.posts}>{postControll()}</div>}
    </div>
  );
};
