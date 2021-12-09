import React from "react";
import Text from "../elements/Text";
import Btn from "../elements/Btn";
import Input from "../elements/Input";

import styled from "styled-components";

const CommentWrite = () => {
  return (
    <>
      <Test>
        <Text> 댓글내용 </Text>
        <Input> 내용을 입력해주세요 </Input>
        <Btn> 작성하기 </Btn>
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
