import { useState } from "react";
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
import { PostConfirm } from "../../../asset/common/PostConfirm";

export const PostCreater: React.FC = () => {
  const { posts, profile, isOwnerProfile, addPost } = {
    posts: useAppSelector(stateProfilePosts),
    profile: useAppSelector(stateProfile),
    isOwnerProfile: useAppSelector(stateProfileIsOwner),
    addPost: profileAction.addPost,
  };

  const [display, setDisplay] = useState({ display: "none" });
  const [selectedPost, selectPost] = useState(0);

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
              isOwner={isOwnerProfile}
              key={item.id}
              idPost={item.id}
              name={profile.name}
              surname={profile.surname}
              img={profile.avatar}
              text={item.body}
              time={item.timestamp}
              selectPost={selectPost}
              openConfirm={setDisplay}
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
      <PostConfirm
        idPost={selectedPost}
        display={display}
        switchDisplay={setDisplay}
      />
    </div>
  );
};
