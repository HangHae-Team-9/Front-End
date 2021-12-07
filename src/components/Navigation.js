import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Btn from "../elements/Btn";

export default function Navigation() {
  const history = useHistory();

  const toLogin = () => {
    history.push("/pages/LogIn");
  };

  const toSignUp = () => {
    history.push("/pages/SignUp");
  };

  return (
    <NavBar>
      <Header>
        <Link to="/" style={{ display: "flex" }}>
          <img
            src="https://svgsilh.com/svg/1517090.svg"
            alt="logoImg"
            style={{ width: "100px" }}
          />
          <NavTitle>개팔자 상팔자</NavTitle>
        </Link>
        <LinkWrap>
          <HyperLink onClick={toLogin}>로그인</HyperLink>
          <HyperLink onClick={toSignUp}>회원가입</HyperLink>
        </LinkWrap>
      </Header>
    </NavBar>
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
  z-index: 999;
`;

const Header = styled.div`
  width: 60%;
  min-width: 500px;
  background-color: green;
  margin: auto;
  height: 100%;
  display: flex;

  color: #999;
  position: relative;
`;

const NavTitle = styled.div`
  font-size: 50px;
  line-height: 2;
`;

const LinkWrap = styled.div`
  position: absolute;
  right: 0;
  height: 30px;
  display: flex;
`;

const HyperLink = styled.div`
  margin: 10px;
  position: reletive;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #eee;
  }

  &:after {
    content: "";
    border-left: 1px solid #fff;
    position: absolute;
    top: 3px;
    bottom: 0;
    margin: auto 10px;
    height: 12px;
  }

  &:last-child:after {
    content: "";
    border: none;
  }
`;
