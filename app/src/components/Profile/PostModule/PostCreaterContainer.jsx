import PostCreater from "./PostCreater";
import { changeInputPostAC, addPostAC } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let PostCreaterContainer = connect(
  (state) => ({
    newText: state.pageProfile.newTextPost,
    posts: state.pageProfile.posts,
  }),
  (dispatch) => ({
    addPost: () => dispatch(addPostAC()),
    changeInputPost: (text) => dispatch(changeInputPostAC(text)),
  })
)(PostCreater);

export default PostCreaterContainer;
