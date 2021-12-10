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

const addPostDB = (username, title, content, file, categoryname) => {
  return function (dispatch, getState, { history }) {
    apis.addPost(username, title, content, file, categoryname).then((res) => {
      window.alert(res.data);
      history.replace("/");
    });
  };
};

// reducer
// export default handleActions();

export const postActions = {
  addPostDB,
};
