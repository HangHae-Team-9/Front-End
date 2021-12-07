import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Input = (props) => {
  const { label, placeholder, _onChange, type } = props;
  return (
    <React.Fragment>
      {/* <Grid> {label} </Grid> */}
      <Text>{label}</Text>
      <ElInput
        placeholder={placeholder}
        onChange={_onChange}
        type={props.type}
        id={props.type}
      />
    </React.Fragment>
  );
};

const Text = styled.div`
  color: #fff;
`;

const ElInput = styled.input`
  border: 1px solid #87cefa;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

Input.defaultProops = {
  label: "텍스트",
  placeholder: "텍스트를 입력해주세요.",
  _onChagne: () => {},
};

export default Input;
