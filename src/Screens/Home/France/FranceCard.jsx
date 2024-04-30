import React from "react";
import styled from "styled-components";

const GreenCard = ({ number, title, content }) => {
  const iseven = parseInt(number) % 2 === 0;

  return (
    <Container>
      <NumberOverlay>{number}</NumberOverlay>
      <CardContainer className={iseven ? "even" : ""}>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: auto auto 20px auto;
  position: relative;
`;

const CardContainer = styled.div`
  width: 200px;
  height: 250px;
  background-color: var(--green);
  color: white;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  @media (min-width: 800px) {
    width: 290px;
    height: 300px;
  }

  &.even {
    border: 1px solid var(--green);
    background-color: white;
    color: var(--green);
  }
`;

const CardTitle = styled.h5`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

const CardContent = styled.p`
  font-size: 12px;
  font-weight: 300;
  @media (min-width: 800px) {
    font-size: 1rem;
  }
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
  @media (min-width: 800px) {
    font-size: 4rem;
    top: -60px;
  }
`;

export default GreenCard;
