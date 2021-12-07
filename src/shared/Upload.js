import React from "react";
import styled from "styled-components";

const Upload = (props) => {
  const { _onChange, margin, width, height, type } = props;
  return (
    <>
      <UpInput
        type={type}
        onChange={_onChange}
        margin={margin}
        width={width}
        height={height}
        accept="image/*"
      />
    </>
  );
};

const UpInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  margin: ${(props) => props.margin};
`;

export default Upload;
