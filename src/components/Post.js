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
import { Link, useHistory } from "react-router-dom";

const Posting = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

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

  const toMainPage = () => {
    history.push("/");
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
              _onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }}
              style={{ margin: "15px 0" }}
            />
            <div className="preview">
              {imageSrc && (
                <img
                  width="70%"
                  height="70%"
                  src={imageSrc}
                  alt="preview-img"
                />
              )}
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
        <Textarea
          width="50%"
          height="300px"
          _onChange={changeContent}
          margin="0px 0px 20px 139px"
        />
        <BlogPostCta>
          <Link to="/">
            <Btn fs="17px" margin="5px" width="130px" _onClick={addPosting}>
              작성하기
            </Btn>
          </Link>
          <Link to="/">
            <Btn fs="17px" margin="5px" width="130px">
              돌아가기
            </Btn>
          </Link>
        </BlogPostCta>
      </CardWrap>

      {/* <BlogPost>
        <Text margin="20px" size="30px" bold>
          게시글 작성
        </Text>
        <Dropdown _onClick={changeCategoryname} />
        <Upload
          type="file"
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

        <Input
          align="right"
          width="50%"
          label="글 제목"
          placeholder="제목을 작성해주세요."
          _onChange={changeTitle}
        />
        <Text>글 내용</Text>

        <Textarea width="300px" height="300px" _onChange={changeContent} />

        <Btn margin="5px" width="90px" _onClick={addPosting}>
          작성하기
        </Btn>
        <Btn margin="5px" width="90px">
          취소
        </Btn>
      </BlogPost>
      */}
    </>
  );
};

const CardWrap = styled.div`
  width: 35rem;
  padding: 0px 0px 0px 5px;
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
  display: block;
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
