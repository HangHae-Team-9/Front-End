import axios from "axios";

const api = axios.create({
  baseURL: "http://15.165.160.58",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
  return config;
});

export const apis = {
  test: () => api.get("/"),

  //포스팅
  addPost: (username, title, content, imageSrc, categoryname) => {
    api.post("/api/posting", {
      username: username,
      title: title,
      content: content,
      img: imageSrc,
      categoryname: categoryname,
    });
  },
  getPostCard: () => api.get("/api/user/main"),

  edit: (id, contents) => api.put(`api/articles/${id}`, contents),
  del: (id) => api.delete(`api/articles/${id}`),
  articles: () => api.get("/api/articles"),
  article: (id) => api.get(`/api/articles/${id}`),
  search: (value) => api.get(`/api/articles/search?query=${value}`),

  //댓글//
  addComment: (id, content) =>
    api.post(`/api/articles/${id}/comments`, { content }),
  comments: (id) => api.get(`/api/articles/${id}/comments`),
  delComment: (id, coId) => api.delete(`/api/articles/${id}/comments/${coId}`),
  editComment: (id, coId, content) =>
    api.put(`/api/articles/${id}/comments/${coId}`, { content }),

  //로그인//
  login: (username, password) =>
    api.post("/api/user/login", { username: username, password: password }),

  // 회원가입 //
  signup: (username, pw, pw_chk, email) => {
    api.post("/api/user/signup", {
      username: username,
      password: pw,
      passwordCheck: pw_chk,
      email: email,
    });
  },

  userInfo: () => api.get(`/myinfo`),
  userPassword: (pw) => api.post(`/myinfo`, pw),
  userNewPassword: (pw) => api.put(`/myinfo`, pw),
};
