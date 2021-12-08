import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { userCreators } from "../modules/users";
import { useDispatch } from "react-redux";

const LogIn = (props) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    dispatch(userCreators.setLoginDB(username, password));
  };

  return (
    <>
      <Test>
        <Text size="12px" bold>
          아이디
        </Text>
        <Input
          placeholder="아이디를 입력해주세요"
          margin="10px 0px"
          _onChange={changeUsername}
        />

        <Text size="12px" bold>
          비밀번호
        </Text>
        <Input
          placeholder="패스워드를 입력해주세요"
          margin="10px 0px"
          _onChange={changePassword}
        />

        <Btn margin="auto" _onClick={login}>
          로그인
        </Btn>
      </Test>
    </>
  );
};

const Test = styled.div`
  width: 30%;
  background-color: White;
  margin: 150px auto;
  top: 100px;
  position: relative;
  border: 3px solid black;
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
`;

export default LogIn;
