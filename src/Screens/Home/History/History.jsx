import styled from "styled-components";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";

const History = () => {
  return (
    <Container>
      <Header>
        <h1>L'HISTOIRE DU TENIS DE TABLE</h1>
        <p>
          Le ping-pong, ou tennis de table, a émergé en Angleterre au 19e siècle
          comme un jeu de salon informel. Il a gagné en popularité et des règles
          structurées ont été établies dans les années 1880. En 1926, la
          Fédération Internationale de Tennis de Table (ITTF) a été fondée pour
          réglementer le sport. Le ping-pong est devenu un sport olympique en
          1988. Aujourd'hui, il est apprécié à la fois comme un sport de
          compétition et comme un passe-temps récréatif dans le monde entier.
        </p>
      </Header>
      <TopContent />
      <LeftContent />
      <RightContent />
      <BottomContent />
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.div`
margin-top:50px;
margin-bottom:50px;
  text-align: center;

  h1 {
    font-weight: bold;
    color: var(--green);
  }

  p {
    /* Styles pour le paragraphe */
  }
`;

export default History;
