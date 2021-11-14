import { addPostAC, AppDispatch, RootState } from "..";
import { PostCreater } from "./../PostModule/PostCreater";
import { connect } from "react-redux";


export const PostCreaterContainer = connect(
  (state: RootState) => ({
    posts: state.pageProfile.posts,
    profile: state.pageProfile.profile,
  }),
  (dispatch: AppDispatch) => ({
    addPost: (value: string) => dispatch(addPostAC(value)),
  })
)(PostCreater);
