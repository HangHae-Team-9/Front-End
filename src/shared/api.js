import axios from "axios";

const api = axios.create({
  baseURL: "http://15.165.160.58",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

const apiMultipart = axios.create({
  baseURL: "http://15.165.160.58",
  headers: {
    "content-type":
      "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
  return config;
});

apiMultipart.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
  return config;
});

export const apiMultiPart = {
  addImg: (file) =>
    apiMultipart.post("/api/v1/upload", {
      file: file,
    }),
};

export const apis = {
  test: () => api.get("/"),

  //포스팅
  // 포스팅 추가
  addPost: (username, title, content, file, categoryname) =>
    api.post("/api/posting", {
      username: username,
      title: title,
      content: content,
      img: file,
      categoryname: categoryname,
    }),

  //로그인//
  login: (username, password) =>
    api.post("/api/user/login", { username: username, password: password }),

  kakao: (username) => api.post("/user/kakao/callback", { username }),

  // 이미지 업로드

  // 포스트 삭제
  delPost: (id) => api.delete(`/api/posting/${id}`),
  // 포스트 수정
  putPost: (id, username, title, content, file, categoryname) =>
    api.put(`/api/posting/${id}`, {
      username: username,
      title: title,
      content: content,
      img: file,
      categoryname: categoryname,
    }),

  // 메인페이지 카드 뷰
  getPostCard: () => api.get("/api/user/main"),
  // 상세페이지 뷰
  getDetailCard: (id) => api.get(`/api/user/posting/${id}`),

  //강아지 고양이 페이지 뷰
  getAnycard: (categoryId) => api.get(`/api/category/${categoryId}`),

  //댓글//
  addComment: (id, username, commentcontent) =>
    api.post(`/api/posting/${id}/comment`, {
      username: username,
      commentcontent: commentcontent,
    }),
  comments: (id) => api.get(`/api/articles/${id}/comments`),
  delComment: (id, coId) => api.delete(`/api/articles/${id}/comments/${coId}`),
  editComment: (id, coId, content) =>
    api.put(`/api/articles/${id}/comments/${coId}`, { content }),

  // 회원가입 //
  signup: (username, pw, pw_chk, email) => {
    api.post("/api/user/signup", {
      username: username,
      password: pw,
      passwordCheck: pw_chk,
      email: email,
    });
  },
  //아이디 중복확인//
  checkUsername: (username) =>
    api.post("/api/user/checkid", {
      username: username,
    }),
  //이메일 중복확인//
  checkEmail: (email) => api.post("/api/user/checkemail", email),

  //좋아요 기능//
  likePost: (username, boardid) =>
    api.post(`/api/board/like/${boardid}`, username),
};
