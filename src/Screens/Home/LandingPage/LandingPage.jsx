import styled from "styled-components";

const LandingPage = () => {
  return (
    <Container>
      <LeftContainer>
        <div className="content">
          <h1 className="ping">Ping</h1>
          <p className="content">
            Lionel Messi est synonyme de FIFA FIFPRO World 11 masculin. Lorsque
            l’on parle de la surprenante longévité de son jeu au top des
            performances, le onze idéal est une parfaite référence : depuis
            2007.
          </p>
        </div>
      </LeftContainer>
      <RightContainer>
        <h1 className="pong">Pong</h1>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 720px;
  display: flex;
  background-image: url("../public/img/background.gif");
  overflow: hidden;
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
    text-align: right;
  }

  .content {
    margin-top: 20px;
  }
`;

const RightContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
`;

export default LandingPage;
