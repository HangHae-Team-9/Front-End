import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userCreators } from "../modules/users";
import { RiHeartAddLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import styled from "styled-components";

const LikePost = () => {
  return (
    <React.Fragment>
      <Like>
        <RiHeartAddLine />
        <RiHeartFill />
      </Like>
    </React.Fragment>
  );
};

const Like = styled.div`
  color: red;
  size: 10;
`;

export default LikePost;
