import PostCreater from "./PostCreater";
import {
  changeInputPostAction,
  addPostAction,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let PostCreaterContainer = connect(
  (state) => ({
    newText: state.pageProfile.newTextPost,
  }),
  (dispatch) => ({
    addPost: () => dispatch(addPostAction()),
    changeInputPost: (text) => dispatch(changeInputPostAction(text)),
  })
)(PostCreater);

export default PostCreaterContainer;
