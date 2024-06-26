import styled from "styled-components";
import SectionHeader from "../../../Components/SectionHeader";
import franceData from "./franceData";
import Card from "./FranceCard";

const France = () => {
  return (
    <FranceContainer id="france">
      <SectionHeader
        title="LA FRANCE ET LE TENIS DE TABLE"
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
    </FranceContainer>
  );
};

const FranceContainer = styled.div`
  margin-top: -40px;
  padding: 20px;
`;

const CardGrid = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 90px auto auto auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* 1fr signifie que chaque colonne aura la même largeur */
  gap: 40px; /* Espacement entre les cartes */

  @media (min-width: 800px) {
    width: 100%;
    max-width: 1200px;

    grid-template-columns: repeat(
      auto-fill,
      minmax(300px, 1fr)
    ); /* 1fr signifie que chaque colonne aura la même largeur */
    gap: 40px; /* Espacement entre les cartes */
  }
`;

export default France;
