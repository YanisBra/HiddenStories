import React from "react";
import styled from "styled-components";

const CountryInfo = ({ name, content, date, image }) => {
  return (
    <Container>
      <Header>
        <div className="countryContainer">
          <h2>Pays d'accueil</h2>
          <img src={image} />
        </div>
        <div className="dateContainer">
          <h2>Date d'accueil</h2>
          <p>{date}</p>
        </div>
      </Header>
      <Content>
        <h2>{name}</h2>
        <p>{content}</p>
        <div className="champions">
          <h2>Champions</h2>
          <p>John Marston</p>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin: 40px auto;
  width: 70%;
  border-radius: 12px;
  background-color: rgba(93, 129, 107, 0.07);
  padding: 10px;
  text-align: left;

  h2 {
    /* color: var(--gold); */
    color: var(--gold);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  .countryContainer {
    /* background-color: red; */
  }
  .dateContainer {
    /* background-color: blue; */
  }
`;

const Content = styled.div`
  margin-top: 10px;

  .champions {
    margin-top: 20px;
  }
`;

export default CountryInfo;
