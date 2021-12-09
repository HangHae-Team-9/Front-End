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

  const isLogin = useSelector((store) => store.users.is_login);
  // const username = useSelector((store) => store.users.user);
  // console.log(username);
  // console.log(isLogin);

  const signOut = () => {
    console.log("logout");
    dispatch(userCreators.logOutDB());
  };

  const toPosting = () => {
    history.push("/pages/Posting");
  };

  const toPageDog = () => {
    history.push("/pages/dog");
  };

  const toPageCat = () => {
    history.push("/pages/cat");
  };

  const notLogin = () => {
    window.alert("로그인하세요~");
  };

  if (isLogin) {
    return (
      <NavBar>
        <Header>
          <Link to="/" style={{ display: "flex" }}>
            <img
              src="https://svgsilh.com/svg/1517090.svg"
              alt="logoImg"
              style={{ width: "100px" }}
            />
            <NavTitle>개팔자가 상팔자</NavTitle>
          </Link>
          <LinkWrap>
            <HyperLink>
              {localStorage.getItem("username")} 님 환영합니다.
            </HyperLink>
            <HyperLink>MyPage</HyperLink>
            <HyperLink onClick={signOut}>SignOut</HyperLink>
          </LinkWrap>
          <MainNav>
            <Go onClick={toPageDog}>강아지</Go>
            <Go onClick={toPageCat}>고양이</Go>
            <Go onClick={toPosting}>Go Posting</Go>
          </MainNav>
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
        <Link to="/" style={{ display: "flex" }}>
          <img
            src="https://svgsilh.com/svg/1517090.svg"
            alt="logoImg"
            style={{ width: "100px" }}
          />
          <NavTitle>개팔자가 상팔자</NavTitle>
        </Link>
        <LinkWrap>
          <HyperLink onClick={toLogin}>로그인</HyperLink>
          <HyperLink onClick={toSignUp}>회원가입</HyperLink>
        </LinkWrap>
        <MainNav>
          <Go onClick={toPageDog}>강아지</Go>
          <Go onClick={toPageCat}>고양이</Go>
          <Go onClick={notLogin}>포스팅하러가기</Go>
        </MainNav>
      </Header>
    </NavBar>
  );
}

const NavBar = styled.div`
  width: 80%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  /* width: 1130px; */
  height: 100px;
  background-color: white;
  opacity: 0.8;
  z-index: 999;
`;

const Header = styled.div`
  /* width: 1130px; */
  /* min-width: 500px; */
  background-color: white;
  /* margin: auto; */
  height: 100%;
  display: flex;
  color: black;
  position: relative;
`;

const NavTitle = styled.div`
  font-size: 50px;
  line-height: 2;
  font-family: "Dokdo", cursive;
  margin: 0px auto;
  color: #111;
`;

const LinkWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  height: 30px;
  display: flex;
`;

const HyperLink = styled.div`
  margin: 20px;
  position: reletive;
  cursor: pointer;
  transition: transform 0.5s, color 1s;
  color: #999;

  &:hover {
    color: #111;
    transform: scale(1.1);
  }
`;

const MainNav = styled.div`
  position: fixed;
  top: 60px;
  right: 60px;
`;

const Go = styled.div`
  width: 100px;
  height: 30px;
  background-color: #999;
  border-radius: 10px;
  margin: 10px auto;
  line-height: 2;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    transform: scale(1.2);
    background-color: #111;
  }
`;
