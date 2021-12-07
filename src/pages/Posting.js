import React, { useState } from "react";
import styled from "styled-components";
import Upload from "../shared/Upload";
import Input from "../elements/Input";
// import Image from "../elements/Image";
import Btn from "../elements/Btn";
import Text from "../elements/Text";
// import Dropdown from "../elements/Dropdown";

const Posting = (props) => {
  const [imageSrc, setImageSrc] = useState("");
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <Test>
        <Text margin="0px" size="30px" bold>
          게시글 작성
        </Text>
        <Container>
          <Scontain>
            <Upload
              type="file"
              margin="15px 0px"
              _onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }}
              style={{ margin: "15px 0" }}
            />

            <div className="preview" width="500px" height="500px" margin="10px">
              {imageSrc && (
                <img
                  width="300px"
                  height="300px"
                  src={imageSrc}
                  alt="preview-img"
                />
              )}
            </div>
          </Scontain>

          <Scontain>
            <Input
              align="right"
              width="90%"
              label="글 제목"
              placeholder="제목을 작성해주세요."
            />
            <Text>글 내용</Text>

            <textarea
              style={{ height: "300px", width: "90%" }}
              label="글 내용"
              placeholder="내용을 작성해주세요."
            />
          </Scontain>
        </Container>

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
  width: 900px;
  height: 100%;
  background-color: green;
  margin: auto;
  top: 70px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
`;

const Scontain = styled.div`
  flex-direction: column;
  width: 50%;
  margin: 30px;
`;

export default Posting;
