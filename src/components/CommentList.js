import React from "react";
import styled from "styled-components";
import Btn from "../elements/Btn";
import Text from "../elements/Text";
import { useDispatch, useSelector } from "react-redux";
import { delCommentDB } from "../modules/comment";

const CommentList = (props) => {
  const comments = props.comments;
  const id = props.id;
  const dispatch = useDispatch();
  const isLogin = useSelector((store) => store.users.is_login);

  const delComment = () => {
    window.alert("댓글을 삭제했습니다.");
    dispatch(delCommentDB(id));
  };

  console.log(comments);
  return (
    <React.Fragment>
      {comments &&
        comments.map((comment, key) => {
          const username = comment.username;
          const content = comment.commentcontent;
          return (
            <CommentArea key={key}>
              <CommentTitle>{username}</CommentTitle>
              <Text> {content}</Text>
              <Btn
                margin="0px"
                width="70px"
                height="50px"
                fs="12px"
                padding="0"
              >
                삭제
              </Btn>
            </CommentArea>
          );
        })}
    </React.Fragment>
  );
};

const Test = styled.div`
  width: 70%;
  background-color: White;
  margin: auto;
  position: relative;
  border: 3px solid black;
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
`;

const CommentArea = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-around;
`;

const CommentTitle = styled.div`
  font-size: 20px;
  padding: 0px 10px;
  margin: 0px 10px;

  &::before {
    content: "";
    width: 0px;
    height: 30px;
    border: 1px solid cornflowerblue;
    background-color: cornflowerblue;
    /* border-radius: 30%; */
  }
`;

export default CommentList;
