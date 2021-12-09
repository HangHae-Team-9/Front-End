import styled from "styled-components";
import { useDispatch } from "react-redux";
import { _deleteDetailView } from "../modules/detailView";
import { Route, useHistory } from "react-router";
import DetailEdit from "../pages/DetailEdit";
import { Link } from "react-router-dom";

export default function DetailView(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const detailView = props.detailView;
  console.log(detailView);
  const id = props.id;

  const del = () => {
    dispatch(_deleteDetailView(id));
  };

  if (detailView.username === localStorage.getItem("username")) {
    return (
      <Wrap>
        <div>제목 {detailView.title}</div>
        <div>내용 {detailView.content}</div>
        <div>작성자 {detailView.username}</div>
        <div>작성시간 {detailView.modifiedAt}</div>
        <UDArea>
          <Link
            to={{
              pathname: `/pages/edit/${id}`,
              state: {
                detailView: detailView,
              },
            }}
          >
            <UD>수정</UD>
          </Link>
          <UD onClick={del}>삭제</UD>
        </UDArea>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <div>제목 {detailView.title}</div>
      <div>내용 {detailView.content}</div>
      <div>작성자 {detailView.username}</div>
      <div>작성시간 {detailView.modifiedAt}</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
`;

const UDArea = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: 0;
`;

const UD = styled.div`
  margin: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #fff;
  }
`;
