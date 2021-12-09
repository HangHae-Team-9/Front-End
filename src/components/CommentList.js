import React from "react";
import Text from "../elements/Text";
import styled from "styled-components";

const CommentList = (props) => {
  const comments = props.comments;
  console.log(comments);
  return (
    <React.Fragment>
      <Test>
        {comments &&
          comments.map((comment, key) => {
            const username = comment.username;
            const content = comment.commentcontent;
            return (
              <React.Fragment key={key}>
                <div>댓글작성자: {username}</div>
                <div>댓글내용 : {content}</div>
              </React.Fragment>
            );
          })}
      </Test>
    </React.Fragment>
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

export default CommentList;

const CommentItem = (props) => {
  const { username, post_id, contents, insert_dt } = props;
  return (
    <>
      <Text bold>{username}</Text>
      <Text margin="0px">{contents}</Text>
      <Text margin="0px">{insert_dt}</Text>
    </>
  );
};

CommentItem.defaultProps = {
  username: "zhiyeon",
  post_id: 1,
  contents: "저희집 장난감이랑 똑같아요!!",
  insert_dt: "2021-01-01 19:00:00",
};
