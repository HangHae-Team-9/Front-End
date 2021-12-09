import React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import Text from "./Text";

const Input = (props) => {
  const { label, placeholder, _onChange, type, margin, height, width } = props;

  // if (multiline) {
  //   return (
  //       rows={10}
  //       <Text margin="0"> {label}</Text>
  //       <Eltextarea placeholder={placeholder} onChange={_onChange}></Eltextarea>
  //   );
  // }

  return (
    <React.Fragment>
      {/* <Grid> {label} </Grid> */}
      <Text>{label}</Text>
      <ElInput
        placeholder={placeholder}
        onChange={_onChange}
        type={type}
        id={type}
        margin={margin}
        width={width}
        height={height}
      />
    </React.Fragment>
  );
};

// const Eltextarea = styled.textarea`
//   border: 1px solid #87cefa;
//   width: 100%;
//   padding: 12px 4px;
//   box-sizing: border-box;
// `;

Input.defaultProps = {
  width: "100%",
  label: false,
  placeholder: false,
  _onChange: false,
  margin: false,
};

const ElInput = styled.input`
  border: 1px solid #87cefa;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 12px 4px;
  box-sizing: border-box;
  margin: ${(props) => props.margin};
`;

export default Input;
