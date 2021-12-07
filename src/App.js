import logo from "./logo.svg";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Navigation";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Wrap>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/pages/SignUp" component={SignUp} />
        <Route path="/pages/Login" component={LogIn} />
        <Route path="/" exact component={MainPage} />
      </Switch>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 3000px;
`;

export default App;
