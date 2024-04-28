import React from "react";
import styled from "styled-components";

const GreenCard = ({ number, title, content }) => {
  const iseven = parseInt(number) % 2 === 0;

  return (
    <Container>
      <NumberOverlay>{number}</NumberOverlay>
      <CardContainer iseven={iseven ? "true" : "false"}>
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
  background-color: ${({ iseven }) =>
    iseven === "true" ? "white" : "var(--green)"};
  color: ${({ iseven }) => (iseven === "true" ? "var(--green)" : "white")};
  border: ${({ iseven }) =>
    iseven === "true" ? "1px solid var(--green)" : "none"};
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  /* left: -30px; */
  left: ${({ iseven }) => (iseven === "true" ? "" : "-30px")};

  /* margin-right: auto; */
  right: -30px;
  font-size: 3rem;
  font-weight: bold;
  color: var(--gold);
  z-index: -1;
`;

export default GreenCard;
