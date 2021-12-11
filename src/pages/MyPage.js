import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function MyPage() {
  const username = localStorage.getItem("username");
  const data = useSelector((store) => store.postView.list);
  console.log(data);

  return (
    <>
      <Wrap>
        <Title>내가 남긴 게시글</Title>
        <hr />
        {data.map((data, key) => {
          return (
            data.username === username && (
              <DataWrap key={key}>
                <Category>카테고리 : {data.categoryname}</Category>
                <WT>게시글제목 : {data.title}</WT>
              </DataWrap>
            )
          );
        })}
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  position: relative;
  margin: 100px auto;
  width: 600px;
  height: 300px;
  border-radius: 10%;
  background-color: #eee;
  text-align: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  line-height: 2;
`;

const DataWrap = styled.div`
  display: flex;
  text-align: center;
`;

const Category = styled.div`
  margin-left: 20px;
`;

const WT = styled.div`
  margin-left: 20px;
`;
