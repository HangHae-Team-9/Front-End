import React from "react";
import styled from "styled-components";
import Upload from "../shared/Upload";
import Input from "../elements/Input";
import Image from "../elements/Image";
import Btn from "../elements/Btn";
import Text from "../elements/Text";

const Posting = (props) => {
  return (
    <>
      <Test>
        <Text margin="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
        <Text> 미리보기 </Text>
        <Image
          size="50px"
          shape="rectangle"
          src="https://user-images.githubusercontent.com/75834421/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg"
        />
        <Input width="50%" label="글 제목" placeholder="제목을 작성해주세요." />
        <Text>글 내용</Text>
        <textarea
          style={{ height: "300px", width: "50%" }}
          label="글 내용"
          placeholder="내용을 작성해주세요."
        />
        <Btn margin="5px" width="90px">
          작성하기
        </Btn>
        <Btn margin="5px" width="90px">
          취소
        </Btn>
      </Test>
    </>
  );
};

const Test = styled.div`
  width: 90%;
  /* height: 300px; */
  background-color: green;
  margin: auto;
  top: 70px;
  position: relative;
`;

export default Posting;
