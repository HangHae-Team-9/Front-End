import { createAction, handleActions } from "redux-actions";
import { apis } from "../shared/api";
import alert from "sweetalert";
import axios from "axios";

// action
const LOAD = "detailView/LOAD";
const POST_LIKE = "POST_LIKE";
const LOAD_LIKE = "LOAD_LIKE";

// createAction
const loadDetailView = createAction(LOAD, (detailView) => ({ detailView }));
const postLike = createAction(POST_LIKE, (id, username) => ({ id, username }));
const loadLike = createAction(LOAD_LIKE, (is_loading) => ({ is_loading }));

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
  is_loading: false,
  like_cnt: 0,
  is_like: false,
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
    alert({
      title: "정말 삭제하실거야?",
      text: "복구할수 없어요~",
      icon: "warning",
      buttons: ["취소", "삭제"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        apis.delPost(id).then(() => {
          alert({
            title: "삭제성공!",
            icon: "success",
            button: "확인",
          });
          history.replace("/");
        });
      } else {
      }
    });
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

// const postlikeDB = (id) => {
//   return function (dispatch, gethState) {
//     const _idx=getState()
//   }
// }
