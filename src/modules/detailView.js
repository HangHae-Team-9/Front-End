import { createAction, handleActions } from "redux-actions";
import { apis } from "../shared/api";

// action
const LOAD = "detailView/LOAD";

// createAction
const loadDetailView = createAction(LOAD, (detailView) => ({ detailView }));

// initialState
const initialState = {
  list: [
    {
      username: 123,
      comments: [
        {
          username: "khr",
          commentcontent: "asdasd",
        },
      ],
    },
  ],
};

// thunk
export const _loadDetailView =
  (id) =>
  async (dispatch, getState, { history }) => {
    const { data } = await apis.getDetailCard(id);
    dispatch(loadDetailView(data));
  };

export const _deleteDetailView =
  (id) =>
  async (dispatch, getState, { history }) => {
    const result = window.confirm("삭제하실거에요?");
    if (result) {
      await apis.delPost(id);
      // window.location.reload();
      window.alert("삭제 완료");
      history.replace("/");
    } else {
      console.log("삭제 취소");
    }
  };

export const _editDetailView =
  (id, username, title, content, file, categoryname) =>
  async (dispatch, getState, { history }) => {
    // history.block("수정을 마치실건가요?");
    await apis.putPost(id, username, title, content, file, categoryname);
    history.replace("/");
  };
// reducer
export default handleActions(
  {
    [LOAD]: (state, action) => {
      return {
        ...state,
        list: action.payload.detailView,
      };
    },
  },
  initialState
);
