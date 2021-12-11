import React from "react";
import styled from "styled-components";
import Btn from "../elements/Btn";
import Text from "../elements/Text";
import { useDispatch, useSelector } from "react-redux";
import { delCommentDB } from "../modules/comment";

const CommentList = (props) => {
  const comments = props.comments;
  console.log(comments);
  const id = props.id;
  // const commentId = comments.
  const dispatch = useDispatch();

  const delComment = (key) => {
    const commentId = key + 1;
    console.log(commentId);
    dispatch(delCommentDB(id, commentId));
  };

  return (
    <React.Fragment>
      {comments &&
        comments.map((comment, key) => {
          const username = comment.username;
          const content = comment.commentcontent;
          console.log(username, key);
          return (
            <CommentArea key={key}>
              <CommentTitle>{username}</CommentTitle>
              <CommentContent> {content}</CommentContent>
              {username === localStorage.getItem("username") && (
                <BtnPosition>
                  <PutBtn>수정</PutBtn>
                  <DelBtn>삭제</DelBtn>
                </BtnPosition>
              )}
            </CommentArea>
          );
        })}
    </React.Fragment>
  );
};

const CommentArea = styled.div`
  display: flex;
  margin: 10px;
  position: relative;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
`;

const CommentTitle = styled.div`
  font-size: 20px;
  padding: 0px 10px;
  margin: 0px 10px;
  border-right: 1px solid #eee;
  pointer-events: none;
`;

const CommentContent = styled.div`
  font-size: 16px;
  word-break: break-all;
  width: 100%;
`;

const BtnPosition = styled.div`
  display: flex;
  width: 20%;
`;

const PutBtn = styled.div`
  cursor: pointer;
  color: #888;
  transition: 0.5s;

  &:hover {
    color: cornflowerblue;
  }
`;
const DelBtn = styled.div`
  cursor: pointer;
  color: #888;
  transition: 1s;
  margin-left: 10px;

  &:hover {
    color: red;
  }
`;

export default CommentList;
