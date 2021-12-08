import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { deleteCookie, setCookie } from "../shared/cookies";
import { apis } from "../shared/api";

// action
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const USERINFO = "user/USERINFO";

// action creator
const setLogin = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));
const userInfo = createAction(LOGIN, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  username: null,
  email: null,
  is_login: false,
};

// Thunk function

//회원가입//
const registerDB = (username, pw, pw_chk, email) => {
  return function (dispatch, getState, { history }) {
    apis.signup(username, pw, pw_chk, email);
    window.alert("회원가입을 축하합니다. 로그인페이지로 이동합니다.");
    history.push("/pages/LogIn");
  };
};

const setLoginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(username, password)
      .then((res) => {
        console.log(username);
        console.log(document.cookie);
        setCookie("token", res.data[1].token, 7);
        console.log(document.cookie);
        localStorage.setItem("username", res.data[0].username);
        dispatch(setLogin({ username: username }));
        window.alert("로그인성공");
        history.replace("/");
      })
      .catch((err) => {
        window.alert("없는 회원정보 입니다! 회원가입을 해주세요!");
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    console.log("3");
    deleteCookie("token");
    localStorage.removeItem("username");
    console.log("1");
    dispatch(logOut());
    console.log("2");
    history.replace("/login");
  };
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const userId = localStorage.getItem("username");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(setLogin({ id: userId }));
    } else {
      dispatch(logOut());
    }
  };
};

const userInfoDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .userInfo()
      .then((res) => {
        dispatch(userInfo({ id: res.data.username, email: res.data.email }));
      })
      .catch((err) => {
        return err;
      });
  };
};

// reducer
export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [USERINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.email = action.payload.email;
      }),
  },
  initialState
);

export const userCreators = {
  setLoginDB,
  registerDB,
  logOutDB,
  loginCheckDB,
  userInfoDB,
};
