import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Navigation";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userCreators } from "./modules/users";
import swal from "sweetalert";
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
import MyPage from "./pages/MyPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCreators.loginCheckDB());
  }, [dispatch]);

  // const onPick = (value) => {
  //   swal("Thanks for your rating!", `You rated us ${value}/3`, "success");
  // };

  // const MoodButton = ({ rating, onClick }) => (
  //   <button
  //     data-rating={rating}
  //     className="mood-btn"
  //     onClick={() => onClick(rating)}
  //   />
  // );

  // window.addEventListener(
  //   "beforeunload",
  //   swal({
  //     text: "How was your experience getting help with this issue?",
  //     buttons: {
  //       cancel: "Close",
  //     },
  //     content: (
  //       <div>
  //         <MoodButton rating={1} onClick={onPick} />
  //         <MoodButton rating={2} onClick={onPick} />
  //         <MoodButton rating={3} onClick={onPick} />
  //       </div>
  //     ),
  //   })
  // );

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
          <Route path="/pages/card" component={Card} />
          <Route path="/pages/mypage" component={MyPage} />
          <Route path="/" exact component={MainPage} />
        </Switch>
      </Wrap>
      {/* <Route path="/" exact component={Footer} /> */}
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  max-width: 1130px;
  margin: auto;
`;

export default App;
