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
`;

const CommentTitle = styled.div`
  font-size: 20px;
  padding: 0px 10px;
  margin: 0px 10px;
  border-right: 3px solid cornflowerblue;
  border-radius: 100%;
  pointer-events: none;
`;

const CommentContent = styled.div`
  font-size: 16px;
`;

const BtnPosition = styled.div`
  position: absolute;
  right: 0;
  display: flex;
`;

const PutBtn = styled.div`
  margin-right: 10px;
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

  &:hover {
    color: red;
  }
`;

export default CommentList;
