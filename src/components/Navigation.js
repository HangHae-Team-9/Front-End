import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Btn from "../elements/Btn";
import WebFont from "webfontloader";
import { useDispatch, useSelector } from "react-redux";
import { userCreators } from "../modules/users";

WebFont.load({
  google: {
    // families: ["Do Hyeon", "sans-serif", "Nanum Pen Script", "cursive"],
    families: ["Dokdo", "cursive"],
  },
});

export default function Navigation() {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(document.cookie);
  // const is_login = document.cookie;

  const isLogin = useSelector((store) => store.users.is_login);
  // const username = useSelector((store) => store.users.user.username);
  // console.log(username);
  // console.log(isLogin);

  const signOut = () => {
    console.log("logout");
    dispatch(userCreators.logOutDB());
  };

  const toPosting = () => {
    history.push("/pages/Posting");
  };
  if (isLogin) {
    return (
      <NavBar>
        <Header>
          <div style={{ margin: "auto" }}>
            <Link to="/" style={{ display: "flex" }}>
              <img
                src="https://svgsilh.com/svg/1517090.svg"
                alt="logoImg"
                style={{ width: "100px" }}
              />
              <NavTitle>개팔자가 상팔자</NavTitle>
            </Link>
          </div>
          <LinkWrap>
            <HyperLink>님 환영합니다.</HyperLink>
            <HyperLink>MyPage</HyperLink>
            <HyperLink onClick={signOut}>SignOut</HyperLink>
          </LinkWrap>
          <GoPosting onClick={toPosting}>Go Posting</GoPosting>
        </Header>
      </NavBar>
    );
  }
  const toLogin = () => {
    history.push("/pages/LogIn");
  };

  const toSignUp = () => {
    history.push("/pages/SignUp");
  };

  return (
    <NavBar>
      <Header>
        <div style={{ margin: "auto" }}>
          <Link to="/" style={{ display: "flex" }}>
            <img
              src="https://svgsilh.com/svg/1517090.svg"
              alt="logoImg"
              style={{ width: "100px" }}
            />
            <NavTitle>개팔자가 상팔자</NavTitle>
          </Link>
        </div>
        <LinkWrap>
          <HyperLink onClick={toLogin}>로그인</HyperLink>
          <HyperLink onClick={toSignUp}>회원가입</HyperLink>
        </LinkWrap>
        <GoPosting onClick={toPosting}>포스팅하러가기</GoPosting>
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
  background-color: white;
  opacity: 0.8;
  z-index: 999;
`;

const Header = styled.div`
  width: 60%;
  /* min-width: 500px; */
  background-color: white;
  margin: auto;
  height: 100%;
  display: flex;
  color: black;
`;

const NavTitle = styled.div`
  font-size: 50px;
  line-height: 2;
  font-family: "Dokdo", cursive;
  margin: 0px auto;
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

const GoPosting = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 50%;
  position: fixed;
  bottom: 0;
  right: 100px;
  line-height: 7;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;
