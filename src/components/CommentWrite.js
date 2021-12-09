import React, { useState } from "react";
import Text from "../elements/Text";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import axios from "axios";
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
    dispatch(addCommentDB(id, username, commentcontent));
    // setCommentcontent("");
    // document.location.reload();
  };

  return (
    <>
      <Test>
        <Text> 댓글내용 </Text>
        <Input _onChange={changeCommentcontent}> 내용을 입력해주세요 </Input>
        <Btn _onClick={addComment}> 작성하기 </Btn>
      </Test>
    </>
  );
};

const Test = styled.div`
  width: 70%;
  background-color: White;
  margin: 150px auto;
  top: 100px;
  position: relative;
  border: 3px solid black;
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
`;

export default CommentWrite;
