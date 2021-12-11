import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { userCreators } from "../modules/users";
import { useDispatch } from "react-redux";
import { KAKAO_AUTH_URL, REDIRECT_URI, CLIENT_ID } from "../shared/kakaoAuth";
import { useHistory } from "react-router";

const LogIn = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

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

  const move = () => {
    window.location = `${REDIRECT_URI}`;
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
          type="password"
          _onChange={changePassword}
        />

        <Btn margin="auto" _onClick={login}>
          로그인
        </Btn>
        <div>
          <div
            onClick={move}
            style={{
              margin: "0px 10px",
            }}
          >
            카카오로 로그인
          </div>
        </div>
      </Test>
    </>
  );
};

const Test = styled.div`
  width: 300px;
  background-color: White;
  margin: 150px auto;
  border: 3px solid black;
  padding: 20px 30px;
  border-radius: 10px;
`;

export default LogIn;
