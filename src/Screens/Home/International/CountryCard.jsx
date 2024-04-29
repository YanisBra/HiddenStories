import React from "react";
import styled from "styled-components";

const CountryCard = ({ country, onClick, selected }) => {
  return (
    <StyledCard onClick={() => onClick(country)} selected={selected}>
      <img
        src={selected ? country.image2 : country.image1}
        alt={country.name}
      />
      <p>{country.name}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 10px 20px 10px;
  min-width: 100px;
  height: 120px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.selected ? "var(--green)" : "transparent"};
  color: ${(props) => (props.selected ? "#ffffff" : "var(--green)")};
  border: ${(props) =>
    props.selected ? "1px solid white" : "1px solid var(--green)"};

  img {
    /* Si tu veux appliquer des styles à l'image SVG (fill, etc.) */
    svg {
      fill: #fff;
    }
  }

  p {
    margin-top: 10px;
    font-size: 12px;
    font-family: "Inter";
    font-weight: 500;
    color: ${(props) => (props.selected ? "#ffffff" : "var(--green)")};
  }

  &:hover {
    cursor: pointer;
  }
`;

export default CountryCard;
