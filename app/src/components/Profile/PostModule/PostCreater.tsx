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

const Posts = [
  {
    userID:1030,
    posts:[
      {
        id:1,
        body:"Testing Post",
        timestamp:"00:00:00 01/01/22"
      },
    ]
  },
  {
    userID:1031,
    posts:[
      {
        id:1,
        body:"Lance Post",
        timestamp:"00:00:00 01/01/22"
      },
    ]
  },
  {
    userID:1032,
    posts:[
      {
        id:1,
        body:"Mitchel Post",
        timestamp:"00:00:00 01/01/22"
      },
    ]
  },
  {
    userID:1033,
    posts:[
      {
        id:1,
        body:"Denis Post",
        timestamp:"00:00:00 01/01/22"
      },
    ]
  },
  {
    userID:1034,
    posts:[
      {
        id:1,
        body:"Paul Post",
        timestamp:"00:00:00 01/01/22"
      },
    ]
  },
  {
    userID:1035,
    posts:[
      {
        id:1,
        body:"Jesse Post",
        timestamp:"00:00:00 01/01/22"
      },
    ]
  },
  {
    userID:1036,
    posts:[
      {
        id:1,
        body:"Seth Post",
        timestamp:"00:00:00 01/01/22"
      },
    ]
  },
  {
    userID:1037,
    posts:[
      {
        id:1,
        body:"Melissa Post",
        timestamp:"00:00:00 01/01/22"
      },
    ]
  },
  {
    userID:1038,
    posts:[
      {
        id:1,
        body:"Violet Post",
        timestamp:"00:00:00 01/01/22"
      },
    ]
  },
]