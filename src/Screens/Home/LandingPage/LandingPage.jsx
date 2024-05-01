import styled from "styled-components";

const LandingPage = () => {
  return (
    <Container>
      <LeftContainer>
        <h1 className="ping">Ping</h1>
      </LeftContainer>
      <RightContainer>
        <h1 className="pong">Pong</h1>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  background-image: url("/img/background.gif");
  background-size: cover;
  overflow: hidden;

  h1 {
    font-size: 50px;
  }

  @media (max-width: 800px) {
    height: 100vh;
    h1 {
      font-size: 30px;
    }
  }
`;

const LeftContainer = styled.div`
  background-color: #0000008b;
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 10px;

  .ping {
    width: 100%;
    text-align: right;
  }
`;

const RightContainer = styled.div`
  width: 55%;
  height: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  color: white;

  @media (max-width: 800px) {
    margin-top: 25px;
  }
`;

export default LandingPage;
