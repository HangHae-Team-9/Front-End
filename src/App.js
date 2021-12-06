import logo from "./logo.svg";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Navigation";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Wrap>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 3000px;
`;

export default App;
