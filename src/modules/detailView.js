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
    },
  ],
};

// thunk
export const _loadDetailView =
  (id) =>
  async (dispatch, getState, { history }) => {
    const { data } = await apis.getDetailCard(id);
    console.log(data);
    dispatch(loadDetailView(data));
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
