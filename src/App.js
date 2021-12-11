import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Navigation";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userCreators } from "./modules/users";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import MainPage from "./pages/MainPage";
import Card from "./components/Card";
import Posting from "./pages/Posting";
import PostDetail from "./pages/PostDetail";
import CategoryDog from "./pages/CategoryDog";
import CategoryCat from "./pages/CategoryCat";
import DetailEdit from "./pages/DetailEdit";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCreators.loginCheckDB());
  }, [dispatch]);

  return (
    <>
      <Wrap>
        <GlobalStyles />
        <Nav />
        <Switch>
          <Route path="/pages/cat" component={CategoryCat} />
          <Route path="/pages/dog" component={CategoryDog} />
          <Route path="/pages/Posting" component={Posting} />
          <Route path="/pages/post/:id" component={PostDetail} />
          <Route path="/pages/edit/:id" component={DetailEdit} />
          <Route path="/pages/SignUp" component={SignUp} />
          <Route path="/pages/Login" component={LogIn} />
          <Route path="/pages/card" exact component={Card} />
          <Route path="/" exact component={MainPage} />
        </Switch>
      </Wrap>
      <Route path="/" exact component={Footer} />
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  max-width: 1130px;
  margin: auto;
`;

export default App;
