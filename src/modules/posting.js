// import { createAction, handleActions } from "redux-actions";
import { apis } from "../shared/api";

// action

// const POST = "user/POST";

// action creater

// const addPost = createAction(POST, (postview) => ({ postview }));

// initialState

// const initialState = {
//   list: [],
// };

// thunk
const addPostDB = (username, title, content, imageSrc, categoryname) => {
  return async (dispatch, getState, { history }) => {
    await apis.addPost(username, title, content, imageSrc, categoryname);
    window.location.reload();
    window.alert("작성 성공");
    history.replace("/");
  };
};

// reducer
// export default handleActions();

export const postActions = {
  addPostDB,
};
