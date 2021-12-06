import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  const { text, _onClick, width, height, border, bgc } = props;

  const style = {
    width: width,
    height: height,
    border: border,
    bgc: bgc,
  };

  return (
    <React.Fragment>
      <ElButton onClick={_onClick}> {text}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
  width: "50px",
  height: "50px",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgc};
  padding: 12px 0px;
  border: ${(props) => props.border};
  outline: none;
`;

export default Button;
