import React, { useState } from "react";
import Text from "../elements/Text";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import styled from "styled-components";
import alert from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { addCommentDB } from "../modules/comment";

const CommentWrite = (props) => {
  const id = props.id;

  const dispatch = useDispatch();
  const [commentcontent, setCommentcontent] = useState("");

  const username = localStorage.getItem("username");

  const changeCommentcontent = (e) => {
    setCommentcontent(e.target.value);
  };

  const addComment = () => {
    if (!isLogin) {
      alert("로그인 후 이용해 주시기 바랍니다");
      return;
    }
    if (commentcontent === "") {
      return alert("남길 말을 적어주세요");
    }
    dispatch(addCommentDB(id, username, commentcontent));
  };

  const isLogin = useSelector((store) => store.users.is_login);

  return (
    <React.Fragment>
      <Container>
        <InputArea
          placeholder={
            isLogin ? "댓글을 입력해주세요." : "로그인 후 이용해주세요."
          }
          onChange={changeCommentcontent}
        />
        <BtnArea onClick={addComment}>작성</BtnArea>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  margin: 20px;
  display: flex;
  margin-bottom: 50px;
`;

const InputArea = styled.input`
  width: 90%;
  height: 50px;
  outline: none;
  transform: border 0.5s;

  &:focus {
    border: 1px solid green;
  }

  &::placeholder {
    padding: 20px;
    color: #000;
    font-weight: bold;
  }
`;

const BtnArea = styled.div`
  width: 58px;
  height: 50px;
  background-color: cornflowerblue;
  font-size: 1rem;
  text-align: center;
  line-height: 3.2;
  color: #fff;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export default CommentWrite;
