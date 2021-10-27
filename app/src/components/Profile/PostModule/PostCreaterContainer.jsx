import PostCreater from "./PostCreater";
import {
  changeInputPostAction,
  addPostAction,
} from "../../../redux/profile-reducer";

const PostCreaterContainer = (props) => {
  const addPost = () => {
    props.store.dispatch(addPostAction());
    changeInputPost("");
  };

  const changeInputPost = (text) => {
    props.store.dispatch(changeInputPostAction(text));
  };

  return (
    <div>
      <PostCreater
        state={props.store.getState()}
        addPost={addPost}
        changeInputPost={changeInputPost}
      />
    </div>
  );
};

export default PostCreaterContainer;
