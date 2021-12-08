import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { userCreators } from "../modules/users";
import { usernameCheck, passwordCheck, emailCheck } from "../shared/regExp";

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
    if (username === "" || pw === "" || pw_chk === "" || email === "") {
      window.alert("빈 칸이 없도록 모두 입력해주세요");
      return;
    }

    if (pw !== pw_chk) {
      window.alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!usernameCheck(username)) {
      window.alert(
        "아이디는 영문 대,소문자 또는 숫자가 1개 이상씩 포함된 3자이상이어야 합니다."
      );
      return;
    }
    if (!passwordCheck(pw)) {
      window.alert("비밀번호는 4자이상의 비밀번호여야 합니다.");
      return;
    }
    if (!emailCheck(email)) {
      window.alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

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
        type="password"
      />

      <Text size="12px" bold>
        비밀번호확인
      </Text>
      <Input
        placeholder="패스워드를 다시 입력해주세요"
        margin="10px 0px"
        _onChange={changePw_chk}
        type="password"
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
