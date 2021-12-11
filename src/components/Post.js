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
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apis, apiMultiPart } from "../shared/api";

const Posting = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const username = localStorage.getItem("username");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryname, setCategoryname] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeContent = (e) => {
    setContent(e.target.value);
  };
  const changeCategoryname = (e) => {
    setCategoryname(e.target.innerText);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

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

  const addPosting = async (e) => {
    e.preventDefault();

    const file = new FormData();
    console.log(username, title, content, file, categoryname);

    file.append("file", selectedFile);

    await axios({
      method: "post",
      url: "http://13.125.197.66/api/v1/upload",
      data: file,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      // await apiMultiPart.addImg(file)
      .then((res) => {
        const file = res.data;
        dispatch(
          postActions.addPostDB(username, title, content, file, categoryname)
        );
      });
  };

  return (
    <>
      <CardWrap>
        <Dropdown _onClick={changeCategoryname} />
        <BlogPost>
          <BlogPostImg>
            <Upload
              margin="10px 0px 10px 5px"
              justify-content="space-between"
              type="file"
              _onChange={handleFileChange}
              style={{ margin: "15px 0" }}
            />
            <div className="preview">
              {imageSrc && <img src={imageSrc} alt="preview-img" />}
            </div>
          </BlogPostImg>
        </BlogPost>
        <BlogPostInfo>
          <Text size="20px" bold margin="10px 0px">
            당신의 개냥용품을 소개해보세요
          </Text>
        </BlogPostInfo>

        <BlogPostInput>
          <Input
            margin="15px 0px"
            align="right"
            width="50%"
            placeholder="제목을 작성해주세요."
            _onChange={changeTitle}
          />
        </BlogPostInput>
        <BlogPostText>
          <Text margin="5px 0px 10px 0px" bold>
            여기에다 용품 자랑을 해보세요
          </Text>
        </BlogPostText>
        <Textarea width="100%" height="300px" _onChange={changeContent} />
        <BlogPostCta>
          {/* <Link to="/"> */}
          <Btn fs="17px" margin="5px" width="130px" _onClick={addPosting}>
            작성하기
          </Btn>
          {/* </Link> */}
          <Link to="/">
            <Btn fs="17px" margin="5px" width="130px">
              돌아가기
            </Btn>
          </Link>
        </BlogPostCta>
      </CardWrap>
    </>
  );
};

const CardWrap = styled.div`
  width: 35rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  :hover {
    transform: translateY(-4px);
    box-shadow: rgb(0 0 0 / 15%) 0px 12px 20px 0px;
  }
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 50px;

  @media (max-width: 1024px) {
    width: 21rem;
  }
  @media (max-width: 768px) {
    width: 34rem;
  }
  @media (max-width: 540px) {
    width: 22rem;
  }
  @media (max-width: 414px) {
    width: 19rem;
  }
  @media (max-width: 375px) {
    width: 16.5rem;
  }
  @media (max-width: 280px) {
    width: 12rem;
  }
`;

const BlogPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogPostImg = styled.div``;

const BlogPostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogPostDate = styled.div``;

const BlogPostInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogPostText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogPostCta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Posting;
