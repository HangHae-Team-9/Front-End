import React from "react";
import styled from "styled-components";

const Dropdown = (props) => {
  const { _onClick, width } = props;
  return (
    <React.Fragment>
      <Entire_DD>
        <Dt>
          <label for="카테고리 선택">카테고리 선택 </label>
        </Dt>
        <Dd onClick={_onClick}>강아지</Dd>
        <Dd onClick={_onClick}>고양이</Dd>
      </Entire_DD>
    </React.Fragment>
  );
};

const Entire_DD = styled.div`
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
`;
const Dd = styled.div`
  margin: 0;
  line-height: 1.5em;
  color: #333;

  &:hover {
    color: black;
    background-color: white;
    padding-left: 5px;
  }
`;

export default Dropdown;
