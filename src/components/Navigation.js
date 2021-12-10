import React from "react";
import styled from "styled-components";
import { Link, NavLink, useHistory } from "react-router-dom";
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
  console.log(isLogin);
  // const username = useSelector((store) => store.users.user);
  // console.log(username);

  const signOut = () => {
    console.log("logout");
    dispatch(userCreators.logOutDB());
  };

  const notLogin = () => {
    window.alert("로그인하세요~");
  };

  if (isLogin) {
    return (
      <NavBar>
        <Header>
          <Welcome>
            {localStorage.getItem("username")} 님 좋은 하루 되세요.
          </Welcome>
          <Link to="/" style={{ display: "flex" }}>
            <img
              src="https://svgsilh.com/svg/1517090.svg"
              alt="logoImg"
              style={{ width: "100px" }}
            />
            <NavTitle>개팔자가 상팔자</NavTitle>
          </Link>
          <LinkWrap>
            <HyperLink>MyPage</HyperLink>
            <HyperLink onClick={signOut}>SignOut</HyperLink>
          </LinkWrap>
          <MainNav>
            <NavLink
              to="/"
              exact
              activeStyle={{
                color: "#000",
                fontWeight: "900",
              }}
            >
              <Go>메인페이지</Go>
            </NavLink>
            <NavLink
              to="/pages/dog"
              activeStyle={{ color: "#000", fontWeight: "900" }}
            >
              <Go>강아지</Go>
            </NavLink>
            <NavLink
              to="/pages/cat"
              activeStyle={{ color: "#000", fontWeight: "900" }}
            >
              <Go>고양이</Go>
            </NavLink>
            <NavLink
              to="/pages/Posting"
              activeStyle={{ color: "#000", fontWeight: "900" }}
            >
              <Go>Go Posting</Go>
            </NavLink>
          </MainNav>
        </Header>
      </NavBar>
    );
  }

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
          <NavLink to="/pages/LogIn" activeStyle={{ color: "#111" }}>
            <HyperLink>로그인</HyperLink>
          </NavLink>
          <NavLink to="/pages/SignUp" activeStyle={{ color: "#111" }}>
            <HyperLink>회원가입</HyperLink>
          </NavLink>
        </LinkWrap>
        <MainNav>
          <NavLink
            to="/"
            exact
            activeStyle={{ color: "#000", fontWeight: "900" }}
          >
            <Go>메인페이지</Go>
          </NavLink>
          <NavLink
            to="/pages/dog"
            activeStyle={{ color: "#000", fontWeight: "900" }}
          >
            <Go>강아지</Go>
          </NavLink>
          <NavLink
            to="/pages/cat"
            activeStyle={{ color: "#000", fontWeight: "900" }}
          >
            <Go>고양이</Go>
          </NavLink>

          <Go onClick={notLogin}>Go Posting</Go>
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

const Welcome = styled.div`
  pointer-events: none;
  position: absolute;
  top: 12px;
  left: 160px;
  margin: auto;
  text-align: center;
  color: #aaa;
`;

const LinkWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  height: 30px;
  display: flex;
  color: #999;
`;

const HyperLink = styled.div`
  margin: 20px;
  position: reletive;
  cursor: pointer;
  transition: transform 0.5s, color 1s;

  &:hover {
    transform: scale(1.1);
    color: #111;
  }
`;

const MainNav = styled.div`
  position: fixed;
  top: 60px;
  right: 60px;
  color: #fff;
`;

const Go = styled.div`
  width: 100px;
  height: 30px;
  background-color: #999;
  border-radius: 10px;
  margin: 10px auto;
  line-height: 2;
  text-align: center;
  cursor: pointer;
  transition: 0.7s, font-size 0.5s;

  &:hover {
    transform: scale(1.2);
    background-color: #111;
    color: #fff;
  }
`;
