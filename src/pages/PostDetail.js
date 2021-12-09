import React from "react";
// import styled from "styled-components";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import { _loadDetailView } from "../modules/detailView";
import { useDispatch, useSelector } from "react-redux";
import DetailView from "../components/DetailView";

const PostDetail = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  // delay(1000)

  React.useEffect(() => {
    dispatch(_loadDetailView(id));
  }, [dispatch, id]);

  const data = useSelector((a) => a.detailView.list);
  const comments = data.comments;
  console.log(comments);

  return (
    <>
      <DetailView detailView={data} />
      <CommentWrite id={id} />
      <CommentList comments={comments} />
    </>
  );
};

export default PostDetail;
