import PostCreater from "./PostCreater";
import { addPostAC } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";

let PostCreaterContainerConnect = connect(
  (state) => ({
    posts: state.pageProfile.posts,
  }),
  (dispatch) => ({
    addPost: (value) => dispatch(addPostAC(value)),
  })
);

export default compose(PostCreaterContainerConnect)(PostCreater);
