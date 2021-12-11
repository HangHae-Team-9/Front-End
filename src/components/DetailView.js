import styled from "styled-components";
import { _deleteDetailView } from "../modules/detailView";
import { Link } from "react-router-dom";
import { RiHeartAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

export default function DetailView(props) {
  const dispatch = useDispatch();

  const detailView = props.detailView;
  console.log(detailView);
  const id = props.id;

  const del = () => {
    dispatch(_deleteDetailView(id));
  };
  console.log(detailView.modifiedAt);
  const modified = detailView.modifiedAt;
  const ymd = modified;
  console.log(ymd);

  if (detailView.username === localStorage.getItem("username")) {
    return (
      <Wrap>
        <PostView>
          <Img src={detailView.img} alt="img"></Img>
          <PostTitle>{detailView.title}</PostTitle>
          <PostContent>{detailView.content}</PostContent>
        </PostView>
        <Exp>
          <Modified>등록일 {ymd}</Modified>
          <PostAuthor>작성자 {detailView.username}</PostAuthor>
        </Exp>
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
      <PostView>
        <Img src={detailView.img} alt="img"></Img>
        <PostTitle>{detailView.title}</PostTitle>
        <PostContent>{detailView.content}</PostContent>
      </PostView>
      <Exp>
        <Modified>등록일 {ymd}</Modified>
        <PostAuthor>작성자 {detailView.username}</PostAuthor>
      </Exp>
      <RiHeartAddLine />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
`;

const PostView = styled.div`
  width: 70%;
  background-color: #eee;
  margin: auto;
  text-align: center;
  position: relative;
`;

const PostTitle = styled.div`
  font-size: 27px;
  font-weight: 900;
  margin: 40px;
`;

const PostContent = styled.div`
  font-size: 15px;
  margin-bottom: 70px;
`;

const PostAuthor = styled.div``;

const Img = styled.img`
  width: 50%;
  max-width: 600px;
`;

const Exp = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  pointer-events: none;
  text-align: right;
`;

const Modified = styled.div`
  margin-left: 15px;
`;

const UDArea = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: 40px;
`;

const UD = styled.div`
  margin: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #fff;
  }
`;
