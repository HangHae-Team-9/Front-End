import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { userCreators } from "../modules/users";
import { usernameCheck, passwordCheck, emailCheck } from "../shared/regExp";
import axios from "axios";
import { apis } from "../shared/api";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [pw_chk, setPw_chk] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [checkUsername, setCheckUsername] = useState("");

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  const changePw = (e) => {
    setPw(e.target.value);
  };
  function changePw_chk(e) {
    setPw_chk(e.target.value);
  }

  function register() {
    if (username === "" || pw === "" || pw_chk === "" || email === "") {
      window.alert("빈 칸이 없도록 모두 입력해주세요");
      return;
    }

    if (!emailCheck(email)) {
      window.alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (pw !== pw_chk) {
      window.alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!usernameCheck(username)) {
      window.alert("아이디는 대문자,소문자,숫자로 이루어진 4~12자여야 합니다.");
      return;
    }
    if (!passwordCheck(pw)) {
      window.alert("비밀번호는 4자이상의 비밀번호여야 합니다.");
      return;
    }

    const onClickUsernameCheck = () => {
      if (username === "") {
        window.alert("아이디를 입력해주세요.");
      } else {
        const usernameCheckInput = { username: username };
        apis
          .checkUsername(usernameCheckInput)
          .then((response) => {
            window.alert("사용하실 수 있는 아이디입니다.");
            setCheckUsername(true);
          })
          .catch((error) => {
            window.alert("이미 존재하는 아이디입니다.");
            setCheckUsername(false);
          });
      }
    };

    const onClickEmailCheck = () => {
      if (email === "") {
        window.alert("이메일을 입력해주세요.");
      } else {
        const emailcheckInput = { email: `${email}` };
        apis
          .signup(emailcheckInput)
          .then((response) => {
            window.alert("사용하실 수 있는 이메일입니다.");
            setCheckEmail(true);
          })
          .catch((error) => {
            window.alert("이미 가입된 이메일입니다.");
            setCheckEmail(false);
          });
      }
    };

    dispatch(userCreators.registerDB(username, pw, pw_chk, email));
  }

  return (
    <Test>
      <Text size="14px" bold>
        아이디
      </Text>
      <Container>
        <Input
          width="70%"
          placeholder="아이디를 입력해주세요"
          margin="10px 0px"
          _onChange={changeUsername}
        />
        {checkEmail === true ? (
          <Btn width="80px" fs="11px">
            중복확인
          </Btn>
        ) : (
          <Btn width="80px" fs="11px">
            중복확인
          </Btn>
        )}
      </Container>

      <Text size="14px" bold>
        이메일
      </Text>
      <Container>
        <Input
          width="70%"
          placeholder="닉네임을 입력해주세요"
          margin="10px 0px"
          _onChange={changeEmail}
        />
        <Btn width="80px" fs="11px">
          중복확인
        </Btn>
      </Container>

      <Text size="14px" bold>
        비밀번호
      </Text>
      <Input
        placeholder="패스워드를 입력해주세요"
        margin="10px 0px"
        _onChange={changePw}
        type="password"
      />

      <Text size="14px" bold>
        비밀번호확인
      </Text>
      <Input
        placeholder="패스워드를 다시 입력해주세요"
        margin="10px 0px"
        _onChange={changePw_chk}
        type="password"
      />

      <Btn _onClick={register} pading="10px" margin="20px 0px">
        회원가입
      </Btn>
    </Test>
  );
};

const Test = styled.div`
  width: 400px;
  background-color: White;
  margin: 150px auto;
  position: relative;
  border: 3px solid black;
  padding: 20px 30px;
  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default SignUp;
