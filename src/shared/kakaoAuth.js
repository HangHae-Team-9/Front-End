const CLIENT_ID = "9e1b0769c24976bf9f9b155109b3f89";

export const REDIRECT_URI = "http://localhost:3000/user/kakao/callback";
// "http://15.165.160.58:8080/user/kakao/callback";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
