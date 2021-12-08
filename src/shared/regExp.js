export const usernameCheck = (username) => {
  let regExp = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\\S+$).{3,}/;
  // 대문자 포함
  return regExp.test(username);
};

export const passwordCheck = (password) => {
  let regExp = /.{4,}/;

  return regExp.test(password);
};

export const emailCheck = (email) => {
  let _reg = /^[a-z0-9A-Z._-]*@[a-z0-9A-Z]*.[a-zA-Z.]*$/;

  return _reg.test(email);
};

// export const checking = {
//   usernameCheck,
//   passwordCheck,
//   emailCheck,
// };
