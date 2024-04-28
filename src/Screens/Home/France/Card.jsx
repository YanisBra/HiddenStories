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
  width: 170px;
  background-color: ${({ iseven }) =>
    iseven === "true" ? "white" : "var(--green)"};
  color: ${({ iseven }) => (iseven === "true" ? "var(--green)" : "white")};
  border: ${({ iseven }) =>
    iseven === "true" ? "1px solid var(--green)" : "none"};
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
`;

const CardTitle = styled.h5`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "KoHo";
`;

const CardContent = styled.p`
  font-size: 11px;
  font-weight: lighter;
`;

const NumberOverlay = styled.p`
  position: absolute;
  font-family: "Inter";
  top: -45px;
  /* left: -30px; */
  left: ${({ iseven }) => (iseven === "true" ? "" : "-30px")};

  /* margin-right: auto; */
  right: -30px;
  font-size: 3rem;
  font-weight: 500;
  color: var(--gold);
  z-index: -1;
`;

export default GreenCard;
