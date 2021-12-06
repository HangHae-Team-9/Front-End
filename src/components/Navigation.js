import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HyperLink from "../elements/HyperLink";
import Btn from "../elements/Btn";
import Image from "../elements/Image";

export default function Navigation() {
  return (
<<<<<<< HEAD
    <Wrap>
      <Header>54544123</Header>
    </Wrap>
=======
    <NavBar>
      <Header>
        <Link to="/" style={{ display: "flex" }}>
          <img
            src="https://svgsilh.com/svg/1517090.svg"
            alt="logoImg"
            style={{ width: "100px" }}
          />
          <div>개팔자 상팔자</div>
        </Link>
        <BtnWrap>
          <Btn large outline>
            로그인
          </Btn>
          <Btn large outline>
            회원가입
          </Btn>
        </BtnWrap>
      </Header>
    </NavBar>
>>>>>>> 307b4ce8b252458d7efe9812e634dd165b85137a
  );
}

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100px;
  background-color: orange;
`;

const Header = styled.div`
  width: 60%;
  min-width: 500px;
  background-color: green;
  margin: auto;
  height: 100%;
  display: flex;
  font-size: 50px;
  line-height: 2;
  color: #999;
  position: relative;
`;

const BtnWrap = styled.div`
  position: absolute;
  right: 0;
  height: 30px;
`;
