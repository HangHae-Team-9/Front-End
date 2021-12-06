import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  // 상위 컴포넌트로부터 props를 전달 받기
  const { is_flex, width, margin, padding, bg, children } = props;

  // 전달받은 props를 별도의 변수에 저장
  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}></GridBox>
    </React.Fragment>
  );
};

// 부여할 것으로 예상되는 스타일들에 대해서 미리 값을 부여해 놓음
Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
};

// porps로부터 전달받은 스타일정보들을 styled component로 적용할 수 있도록
const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: $;` : "")}
  ${(props) => (props.margin ? `margin: $;` : "")}
  ${(props) => (props.bg ? `background-color: $;` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
`;

export default Grid;
