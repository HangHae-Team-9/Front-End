import { createAction, handleActions } from "redux-actions";
import { apis } from "../shared/api";

// action
const LOAD = "postView/LOAD";

// action creator
const loadPostView = createAction(LOAD, (postView) => ({ postView }));

// initialState
const initialState = {
  list: [],
  postView: null,
};

// Thunk function
export const _loadPostView =
  () =>
  async (dispatch, getState, { history }) => {
    const { data } = await apis.getPostCard();
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
