import PostCreater from "./PostCreater";
import { addPostAC } from "../../../redux/profile-creators";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppDispatch, RootState } from "../../../redux/redux-store";

let PostCreaterContainerConnect = connect(
  (state: RootState) => ({
    posts: state.pageProfile.posts,
    profile: state.pageProfile.profile,
  }),
  (dispatch: AppDispatch) => ({
    addPost: (value: string) => dispatch(addPostAC(value)),
  })
);

export default compose(PostCreaterContainerConnect)(PostCreater);
