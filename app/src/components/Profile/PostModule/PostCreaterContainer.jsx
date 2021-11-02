import PostCreater from "./PostCreater";
import { addPostAC } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let PostCreaterContainer = connect(
  (state) => ({
    posts: state.pageProfile.posts,
  }),
  (dispatch) => ({
    addPost: (value) => dispatch(addPostAC(value)),
  })
)(PostCreater);

export default PostCreaterContainer;
