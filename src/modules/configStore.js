import { createStore, combineReducers, applyMiddleware } from "redux";

// middleware
import thunk from "redux-thunk";
import logger from "redux-logger";

// reducers
import detailView from "./detailView";
import postView from "./postView";
import users from "./users";
import comment from "./comment";

// redux router
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

const history = createBrowserHistory();
const rootReducer = combineReducers({
  detailView,
  postView,
  users,
  comment,

  router: connectRouter(history),
});
const middleware = [thunk.withExtraArgument({ history }), logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export { history };
export default store;
