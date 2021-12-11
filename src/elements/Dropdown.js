import React from "react";
import styled from "styled-components";

const Dropdown = (props) => {
  const { _onClick, width } = props;
  return (
    <React.Fragment>
      <EntireDD>
        <Dt>
          <label id="category">카테고리 선택</label>
        </Dt>
        <Dd onClick={_onClick}>강아지</Dd>
        <Dd onClick={_onClick}>고양이</Dd>
      </EntireDD>
    </React.Fragment>
  );
};

const EntireDD = styled.div`
  display: inline-block;
  width: ${(props) => props.width};
  height: 17px;
  overflow-y: hidden;
  border-top: solid 1px #efefef;
  border-right: solid 1px #cdcdcd;
  border-bottom: solid 1px #cdcdcd;
  border-left: solid 1px #efefef;
  border-radius: 2px;
  vertical-align: top;

  &:hover {
    height: 80px;
    background-color: white;
    padding-left: 10px;
  }
`;
const Dt = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  background-color: white;
  padding: 0px;
  text-align: center;
`;
const Dd = styled.div`
  margin: 0;
  line-height: 1.5em;
  color: #333;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: black;
    background-color: white;
    padding-left: 5px;
  }
`;

export default Dropdown;
