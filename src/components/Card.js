import React, { useState } from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import Text from "../elements/Text";

import { _loadPostView } from "../modules/postView";

import { useDispatch, useSelector } from "react-redux";

export default function Card() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(_loadPostView());
  }, []);

  const postList = useSelector((store) => store.postView);
  console.log(postList);

  const [post, setPost] = useState([]);

  return (
    <CardView>
      <Img>
        <Image src="https://ww.namu.la/s/d6ddbc7b5ab45d5d4bca94f571d2ef704a092686014909fc903737b471d6e86156eaa89a221e4f5d398d2cfbc4facfe2d1f49d94017050e2d8605b4a9461acbf4f4aaabc336b82e7171ea19a02afbfe4d377672496cdba870d00135017bab14c" />
      </Img>
      <WordBox>
        <Text>게시글 작성 페이지 제목</Text>
        <Text margin="5px 0px 0px 0px" size="17px" bold>
          작성자
        </Text>
      </WordBox>
    </CardView>
  );
}

const CardView = styled.div`
  width: 200px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
  background-color: midnightblue;
  color: white;
`;

const Img = styled.div`
  width: 100%;
  height: 70%;
  background-color: green;
`;

const WordBox = styled.div`
  width: 100%;
  height: 30%;
  background-color: orange;
`;
