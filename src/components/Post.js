import React, { useState } from "react";
import styled from "styled-components";
import Upload from "../shared/Upload";
import Input from "../elements/Input";
// import Image from "../elements/Image";
import Btn from "../elements/Btn";
import Text from "../elements/Text";
import Dropdown from "../elements/Dropdown";
import Textarea from "../elements/Textarea";
import { postActions } from "../modules/posting";
import { useDispatch, useSelector } from "react-redux";

const Posting = (props) => {
  const dispatch = useDispatch();

  const username = localStorage.getItem("username");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryname, setCategoryname] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeContent = (e) => {
    setContent(e.target.value);
  };
  const changeCategoryname = (e) => {
    setCategoryname(e.target.innerText);
  };
  const img = "sd";

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
  console.log(username, title, content, img, categoryname);

  const addPosting = () => {
    dispatch(
      postActions.addPostDB(username, title, content, img, categoryname)
    );
  };

  return (
    <>
      <Test>
        <Text margin="20px" size="30px" bold>
          게시글 작성
        </Text>
        <Container>
          <Scontain>
            <Dropdown _onClick={changeCategoryname} />
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
              width="50%"
              label="글 제목"
              placeholder="제목을 작성해주세요."
              _onChange={changeTitle}
            />
            <Text>글 내용</Text>

            <Textarea width="300px" height="300px" _onChange={changeContent} />
          </Scontain>
        </Container>

        <Btn margin="5px" width="90px" _onClick={addPosting}>
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
  width: 500px;
  height: 650px;
  background-color: green;
  border-radius: 20px;
  margin: auto;
  top: 70px;
  position: relative;
  padding: 1px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Scontain = styled.div`
  flex-direction: column;
  width: 50%;
  margin: 30px;
`;

export default Posting;
