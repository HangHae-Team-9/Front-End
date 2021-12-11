import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterWrap>
        <WhoAreWe>
          <a
            href="https://github.com/HangHae-Team-9"
            style={{
              display: "block",
              fontSize: "30px",
              color: "#222",
              cursor: "wait",
              //   borderBottom: "1px solid #eee",
              //   borderRadius: "100%",
              marginBottom: "20px",
              padding: "20px",
            }}
          >
            React & Spring Team 9
          </a>
          <Ends>
            <div>
              <a href="https://github.com/HangHae-Team-9/Front-End">
                Front-End-Github
              </a>
              <Name>이지연</Name>
              <Name>정상일</Name>
              <Name>김형래</Name>
            </div>
            <div>
              <a href="https://github.com/HangHae-Team-9/Back-End">
                Back-End-Github
              </a>
              <Name>서유리</Name>
              <Name>이현범</Name>
              <Name>이한울</Name>
            </div>
          </Ends>
        </WhoAreWe>
      </FooterWrap>
    </>
  );
}

const FooterWrap = styled.div`
  width: 100%;
  position: relative;
  /* background: radial-gradient(#333, white); */
  text-align: center;
  bottom: -900px;
  margin: auto;
  color: #222;
  border-top-left-radius: 200%;
  border-top-right-radius: 200%;
  height: 300px;
`;

const WhoAreWe = styled.div`
  /* padding-top: 10px; */
  /* width: 360px;
  min-width: 360px; */
  /* margin: auto; */
  width: 80%;
  margin: auto;
`;

const Ends = styled.div`
  padding-top: 10px;
  /* display: flex; */
  margin: auto;
`;

const Name = styled.div`
  padding: 10px;
  font-size: 16px;
  transition: 1s;
  pointer-events: none;

  &:hover {
    color: #000;
  }

  @media screen and (max-width: 1200px) {
    font-size: 30px;
  }

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;
