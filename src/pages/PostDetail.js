import React from "react";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import { _loadDetailView } from "../modules/detailView";
import { useDispatch, useSelector } from "react-redux";

const PostDetail = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(_loadDetailView(id));
  }, []);

  const data = useSelector((state) => state.detailView);
  console.log(data);

  return (
    <React.Fragment>
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
