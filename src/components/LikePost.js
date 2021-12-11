import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userCreators } from "../modules/users";
import { RiHeartAddLine } from "react-icons/ri";
import alert from "sweetalert";
import { RiHeartFill } from "react-icons/ri";
import styled from "styled-components";

const LikePost = () => {
  const isLogin = useSelector((store) => store.users.is_login);
  console.log(isLogin); //false

  const notLogin = () => {
    alert("로그인 후 사용가능합니다.");
  };

  if (isLogin) {
    <Like>
      <RiHeartAddLine />
      <RiHeartFill />
    </Like>;
  }

  return (
    <React.Fragment>
      <Like>
        <RiHeartAddLine onClick={notLogin} />
      </Like>
    </React.Fragment>
  );
};

const Like = styled.div`
  color: red;
`;

export default LikePost;
