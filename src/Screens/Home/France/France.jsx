import React from "react";
import styled from "styled-components";
import franceData from "./franceData";
import GreenCard from "./GreenCard";

const FranceDataList = () => {
  return (
    <Container>
      <Header>
        <h1>FRANCE PING PONG</h1>
        <p>
          Le tennis de table a été introduit en France à la fin du 19ème siècle,
          initialement comme un jeu de salon. La Fédération Française de Tennis
          de Table (FFTT) a été fondée en 1927, jouant un rôle crucial dans la
          popularisation du sport.
        </p>
      </Header>
      <CardGrid>
        {franceData.map((item) => (
          <GreenCard
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
  margin-top: 50px;
`;

const Header = styled.div`
  text-align: center;

  h1 {
    font-weight: bold;
    color: var(--green);
  }

  p {
    /* Styles pour le paragraphe */
  }
`;

const CardGrid = styled.div`
margin-top:50px;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* 1fr signifie que chaque colonne aura la même largeur */
  gap: 40px; /* Espacement entre les cartes */
`;

export default FranceDataList;
