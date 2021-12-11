// import { createAction, handleActions } from "redux-actions";
import { apis } from "../shared/api";
import alert from "sweetalert";

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
    apis
      .addPost(username, title, content, file, categoryname)
      .then((res) => {
        if (res.data === "게시글 작성이 완료되었습니다.") {
          alert(res.data);
          history.replace("/");
        } else {
          alert(res.data);
        }
      })
      .catch((e) => alert(e));
  };
};

// reducer
// export default handleActions();

export const postActions = {
  addPostDB,
};
