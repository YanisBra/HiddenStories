import React from "react";
import styled from "styled-components";

const CountryCard = ({ country, onClick, isSelected }) => {
  return (
    <StyledCard onClick={() => onClick(country)} isSelected={isSelected}>
      <img src={country.image} alt={country.name} />
      <h3>{country.name}</h3>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 120px;
  min-width: 120px;
  background-color: ${(props) =>
    props.isSelected ? "var(--green)" : "transparent"};
  color: ${(props) => (props.isSelected ? "#ffffff" : "var(--green)")};

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
    color: ${(props) => (props.isSelected ? "#ffffff" : "var(--green)")};
  }

  &:hover {
    cursor: pointer;
  }
`;

export default CountryCard;
