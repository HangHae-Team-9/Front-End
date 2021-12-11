import styled from "styled-components";
import Card from "../components/Card";
import React from "react";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <>
      <ContainBox>
        <Card />
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
