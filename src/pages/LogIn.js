import styled from "styled-components";
import Btn from "../elements/Btn";

export default function LogIn() {
  return (
    <>
      <Test>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <Btn>로그인</Btn>
      </Test>
    </>
  );
}

const Test = styled.div`
  width: 30%;
  height: 500px;
  background-color: blue;
  margin: auto;
  top: 100px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px auto;
`;
