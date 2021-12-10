import React, { useState } from "react";
import Text from "../elements/Text";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import styled from "styled-components";
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
      window.alert("로그인 후 이용해 주시기 바랍니다");
      return;
    }
    dispatch(addCommentDB(id, username, commentcontent));
  };

  const isLogin = useSelector((store) => store.users.is_login);

  return (
    <React.Fragment>
      <Container>
        <Text margin="10px 0px" size="20px">
          {" "}
          댓글{" "}
        </Text>
        <Input
          placeholder={
            isLogin ? "댓글을 입력해주세요." : "로그인 후 이용해주세요."
          }
          _onChange={changeCommentcontent}
        >
          {" "}
        </Input>
        <Btn margin="10px 0px" fs="15px" _onClick={addComment}>
          {" "}
          작성하기{" "}
        </Btn>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  margin: 20px;
`;

export default CommentWrite;
