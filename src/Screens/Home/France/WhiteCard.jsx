import React from "react";
import styled from "styled-components";

const GreenCard = ({ number, title, content }) => {
  return (
    <Container>
      <NumberOverlay>{number}</NumberOverlay>
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  position: relative;
`;

const CardContainer = styled.div`
  color: var(--green);
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--green);
  border-radius: 6px;
`;

const CardTitle = styled.h5`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 1rem;
`;

const NumberOverlay = styled.p`
  position: absolute;
  top: -45px;
  left: -30px;
  font-size: 3rem;
  font-weight: bold;
  color: var(--gold);
  z-index: -1;
`;

export default GreenCard;