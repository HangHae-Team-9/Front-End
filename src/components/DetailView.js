import styled from "styled-components";

export default function DetailView(props) {
  const detailView = props.detailView;
  console.log(detailView);
  return (
    <>
      <div>제목 {detailView.title}</div>
      <div>내용 {detailView.content}</div>
      <div>작성자 {detailView.username}</div>
      <div>작성시간 {detailView.modifiedAt}</div>
    </>
  );
}
