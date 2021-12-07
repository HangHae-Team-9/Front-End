import { createAction, handleActions } from "redux-actions";
// import produce from "immer";
import { apis } from "../shared/api";

// action
const LOAD = "postView/LOAD";

// action creator
const loadPostView = createAction(LOAD, (postView) => ({ postView }));

// initialState
const initialState = {
  list: [
    {
      username: "유저이름",
      img: "src",
      title: "title",
    },
  ],
};

// Thunk function
export const _loadPostView =
  () =>
  (dispatch, getState, { history }) => {
    const data = apis.test();
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
