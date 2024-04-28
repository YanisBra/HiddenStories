import styled from "styled-components";
import SectionHeader from "../../../Components/SectionHeader";
import franceData from "./franceData";
import Card from "./Card";

const France = () => {
  return (
    <Container>
      <SectionHeader
        title="FRANCE PING PONG"
        description="Le tennis de table a été introduit en France à la fin du 19ème siècle,
          initialement comme un jeu de salon. La Fédération Française de Tennis
          de Table (FFTT) a été fondée en 1927, jouant un rôle crucial dans la
          popularisation du sport."
      />
      <CardGrid>
        {franceData.map((item) => (
          <Card
            key={item.number}
            number={item.number}
            title={item.title}
            content={item.content}
          />
        ))}
      </CardGrid>
    </Container>
  );
};

const Container = styled.div`
  margin-top: -40px;
  padding: 10px;
`;

const CardGrid = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* 1fr signifie que chaque colonne aura la même largeur */
  gap: 40px; /* Espacement entre les cartes */
`;

export default France;
