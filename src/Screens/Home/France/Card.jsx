import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <CardContainer>
        <CardTitle>Titre de la carte</CardTitle>
        <CardContent>
          Contenu de la carte. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </CardContent>
      </CardContainer>
    </Container>
  );
};


const Container = styled.div`
  width: 33%;
`;


// Définition du composant de la carte avec Styled Components
const CardContainer = styled.div`
  background-color: var(--green);
  color: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

const CardTitle = styled.h5`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 1rem
`;

export default Card;
