import styled from "styled-components";
import CatCard from "../components/CatCard";
import React from "react";

export default function MainPage() {
  return (
    <>
      <ContainBox>
        <CatCard />
      </ContainBox>
    </>
  );
}

const ContainBox = styled.div`
  width: 100%;
  max-width: 2000px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: white;
`;
