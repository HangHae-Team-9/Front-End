export const usernameCheck = (username) => {
  let regExp = /^[a-zA-Z0-9]{4,12}$/;
  // 대문자 포함
  return regExp.test(username);
};

export const passwordCheck = (password) => {
  let regExp = /^.{4,}$/;
  return regExp.test(password);
};

export const emailCheck = (email) => {
  let _reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

  return _reg.test(email);
};

// export const checking = {
//   usernameCheck,
//   passwordCheck,
//   emailCheck,
// };
