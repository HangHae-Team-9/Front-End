import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import alert from "sweetalert";
import { deleteCookie, setCookie } from "../shared/cookies";
import { apis } from "../shared/api";

// action
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const USERINFO = "user/USERINFO";
const CHECK_USERNAME = "user/CHECKUSERNAME";
const CHECK_EMAIL = "user/CHECKEMAIL";

// action creator
const setLogin = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));
const userInfo = createAction(LOGIN, (user) => ({ user }));
const checkUsername = createAction(CHECK_USERNAME, (username) => ({
  username,
}));
const checkEmail = createAction(CHECK_EMAIL, (email) => ({ email }));

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
    alert(
      "회원가입을 축하합니다.",
      "로그인페이지로 이동합니다.",
      "success"
    ).then(history.push("/pages/LogIn"));
  };
};

const setLoginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(username, password)
      .then((res) => {
        setCookie("token", res.data[1].token, 5);
        localStorage.setItem("username", res.data[0].username);
        dispatch(setLogin({ username: username }));
        history.goBack();
        alert(
          `${localStorage.getItem("username")}님 안녕하세요!`,
          "개팔자 상팔자에 방문해주셔서 감사합니다!",
          "success"
        );
      })
      .catch((err) => {
        alert(
          "아이디 혹은 비밀번호가 일치하지 않습니다",
          "다시한번 입력해주세요!",
          "error"
        );
      });
  };
};

const logOutDB = () => {
  return async function (dispatch, getState, { history }) {
    await deleteCookie("token");
    localStorage.removeItem("username");
    dispatch(logOut());
    history.push("/");
  };
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const username = localStorage.getItem("username");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(setLogin({ username: username }));
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

//(중복확인)//
const usernameCheckDB = (username) => {
  return function (dispatch, getState, { history }) {
    apis
      .checkUsername(username)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const emailCheckDB = (email) => {
  return function (dispatch, getState, { history }) {
    apis
      .checkEmail(email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
  usernameCheckDB,
  emailCheckDB,
};
