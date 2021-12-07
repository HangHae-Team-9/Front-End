import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { userCreators } from "../modules/users";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [pw_chk, setPw_chk] = useState("");
  const [email, setEmail] = useState("");

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changePw = (e) => {
    setPw(e.target.value);
  };
  function changePw_chk(e) {
    setPw_chk(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function register() {
    console.log(username, pw, pw_chk, email);
    dispatch(userCreators.registerDB(username, pw, pw_chk, email));
  }

  return (
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
        _onChange={changePw}
      />

      <Text size="12px" bold>
        비밀번호확인
      </Text>
      <Input
        placeholder="패스워드를 다시 입력해주세요"
        margin="10px 0px"
        _onChange={changePw_chk}
      />

      <Text size="12px" bold>
        이메일
      </Text>
      <Input
        placeholder="닉네임을 입력해주세요"
        margin="10px 0px"
        _onChange={changeEmail}
      />
      <Btn _onClick={register}>회원가입</Btn>
    </Test>
  );
};

const Test = styled.div`
  width: 30%;
  background-color: White;
  margin: 150px auto;
  position: relative;
  border: 3px solid black;
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
`;

export default SignUp;
