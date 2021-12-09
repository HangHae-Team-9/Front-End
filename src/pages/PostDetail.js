import React from "react";
// import styled from "styled-components";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import { _loadDetailView } from "../modules/detailView";
import { useDispatch, useSelector } from "react-redux";
import DetailView from "../components/DetailView";
import styled from "styled-components";

const PostDetail = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  // delay(1000)

  React.useEffect(() => {
    dispatch(_loadDetailView(id));
  }, [dispatch, id]);

  const data = useSelector((a) => a.detailView.list);
  const comments = data.comments;

  return (
    <Wrap>
      <DetailView detailView={data} id={id} />
      <Test>
        <CommentWrite id={id} />
        <CommentList comments={comments} />
      </Test>
    </Wrap>
  );
};

const Test = styled.div`
  width: 70%;
  background-color: White;
  margin: auto;
  position: relative;
  border: 3px solid black;
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
`;

const Wrap = styled.div`
  background-color: lightblue;
  width: 80%;
  max-width: 1130px;
  min-width: 280px;
  margin: auto;
  position: relative;
  top: 100px;
  height: 100%;
`;

export default PostDetail;
