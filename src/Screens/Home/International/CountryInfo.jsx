import React from "react";
import styled from "styled-components";

const CountryInfo = ({ name, content, date, flag, champions }) => {
  return (
    <Container>
      <Header>
        <div className="countryContainer">
          <h2 className="title">PAYS D'ACCUEIL</h2>
          <img src={flag} alt={`Flag of ${name}`} />
        </div>
        <div className="dateContainer">
          <h2 className="title">DATE D'ACCUEIL</h2>
          <p>{date}</p>
        </div>
      </Header>
      <Content>
        <h2 className="title">{name}</h2>
        <p>{content}</p>
        {/* Affiche championContainer si chmapions n'est pas vide */}
        {champions?.length > 0 && (
          <div className="championContainer">
            <h2 className="title">CHAMPIONS</h2>
            <div className="championList">
              {champions.map((champion) => (
                <div className="champion" key={champion.name}>
                  <img src={champion.image} alt={champion.name} />
                  <p>{champion.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin: 40px auto;
  width: 100%;
  border-radius: 12px;
  background-color: rgba(93, 129, 107, 0.07);
  padding: 10px;
  text-align: left;

  p {
    font-size: 12px;
    @media (min-width: 800px) {
      font-size: 1rem;
    }
  }
  .title {
    color: var(--gold);
    font-family: "KoHo";
    font-weight: bold;
    font-size: 14px;
    @media (min-width: 800px) {
      font-size: 1rem;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (min-width: 800px) {
    margin-bottom: 60px;
  }

  .countryContainer {
  }
  .dateContainer {
  }
`;

const Content = styled.div`
  margin-top: 10px;

  .championContainer {
    margin-top: 30px;
    @media (min-width: 800px) {
      margin-top: 60px;
    }

    .championList {
      display: flex;
      gap: 12px;

      .champion {
      }
    }
  }
`;

export default CountryInfo;
