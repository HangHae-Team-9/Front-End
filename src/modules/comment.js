import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../shared/api";
import "moment";
import moment from "moment";

// action

const SET_COMMENT = "USER/SET_COMMENT";
const ADD_COMMENT = "USER/ADD_COMMENT";
const DELETE_COMMENT = "USER/DELETE_COMMENT";

const LOADING = "USER/LOADING";

// action creater

const setComment = createAction(SET_COMMENT, (username, commentcontent) => ({
  username,
  commentcontent,
}));
const addComment = createAction(ADD_COMMENT, (username, commentcontent) => ({
  username,
  commentcontent,
}));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

//initialState
const initialState = {
  list: {},
  is_loading: false,
};

//thunk
const getCommentDB = (post_id, username, commentcontent) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      return;
    }

    apis.addComment(username, commentcontent);
    // apis.editComment(username, commentcontent)
  };
};

//reducer

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id] = action.payload.commentcontent;
      }),
    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

export const actionCreators = {
  getCommentDB,
  // edoitComment,
  addComment,
};
