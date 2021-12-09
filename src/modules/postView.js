import { createAction, handleActions } from "redux-actions";
import { apis } from "../shared/api";

// action
const LOAD = "postView/LOAD";

// action creator
const loadPostView = createAction(LOAD, (postView) => ({ postView }));

// initialState
const initialState = {
  list: [
    // {
    //   username: "상필이",
    //   title: "상필이제목",
    //   img: "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=이미지#",
    // },
    // {
    //   username: "상필이2",
    //   title: "상필이제목",
    //   img: "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=이미지#",
    // },
    // {
    //   username: "상필이3",
    //   title: "상필이제목",
    //   img: "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=이미지#",
    // },
    // {
    //   username: "상필이4",
    //   title: "상필이제목",
    //   img: "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=이미지#",
    // },
    // {
    //   username: "상필이4",
    //   title: "상필이제목",
    //   img: "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=이미지#",
    // },
    // {
    //   username: "상필이4",
    //   title: "상필이제목",
    //   img: "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=이미지#",
    // },
    // {
    //   username: "상필이4",
    //   title: "상필이제목",
    //   img: "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=이미지#",
    // },
  ],
  postView: null,
};

// Thunk function
export const _loadPostView =
  () =>
  async (dispatch, getState, { history }) => {
    const { data } = await apis.getPostCard();
    console.log(data);
    dispatch(loadPostView(data));
  };

// reducer
export default handleActions(
  {
    [LOAD]: (state, action) => {
      return {
        ...state,
        list: action.payload.postView,
      };
    },
  },
  initialState
);
