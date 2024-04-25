import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hammer from "hammerjs";
import internationalData from "./internationalData";
import CountryCard from "./CountryCard";
import CountryInfo from "./CountryInfo";

const Continent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedContinent, setSelectedContinent] = useState(
    internationalData[currentIndex]
  );
  const [selectedCountry, setSelectedCountry] = useState(
    selectedContinent.countries[0]
  );

  useEffect(() => {
    const swipe = new Hammer(document.querySelector(".swipe"));

    const handleSwipeLeft = () => {
      next();
    };

    const handleSwipeRight = () => {
      prev();
    };

    swipe.on("swipeleft", handleSwipeLeft);
    swipe.on("swiperight", handleSwipeRight);

    return () => {
      swipe.off("swipeleft", handleSwipeLeft);
      swipe.off("swiperight", handleSwipeRight);
    };
  }, []);

  const next = () => {
    const nextIndex = (currentIndex + 1) % internationalData.length;
    setCurrentIndex(nextIndex);
    setSelectedContinent(internationalData[nextIndex]);
    setSelectedCountry(internationalData[nextIndex].countries[0]);
  };

  const prev = () => {
    const prevIndex =
      (currentIndex - 1 + internationalData.length) % internationalData.length;
    setCurrentIndex(prevIndex);
    setSelectedContinent(internationalData[prevIndex]);
    setSelectedCountry(internationalData[prevIndex].countries[0]);
  };

  const handleContinentClick = (index) => {
    setCurrentIndex(index);
    const newSelectedContinent = internationalData[index];
    setSelectedContinent(newSelectedContinent);
    setSelectedCountry(newSelectedContinent.countries[0]); // Sélectionner le premier pays du nouveau continent
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const getVisibleContinents = () => {
    const leftIndex =
      (currentIndex - 1 + internationalData.length) % internationalData.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % internationalData.length;

    return [
      { index: leftIndex, continent: internationalData[leftIndex] },
      { index: centerIndex, continent: internationalData[centerIndex] },
      { index: rightIndex, continent: internationalData[rightIndex] },
    ];
  };

  return (
    <>
      <Container>
        <Button onClick={prev}>Précédent</Button>
        <List>
          {getVisibleContinents().map(({ continent, index }, i) => (
            <ListItem
              key={i}
              className={i === 1 ? "center" : ""}
              onClick={() => handleContinentClick(index)}
            >
              {continent.name}
            </ListItem>
          ))}
        </List>
        <Button onClick={next}>Suivant</Button>
      </Container>
      <div className="swipe"></div>

      <SelectedContinent>
        <img src={selectedContinent.image} alt={selectedContinent.name} />
        {selectedContinent.countries && (
          <CountryList>
            {selectedContinent.countries.map((country, index) => (
              <CountryCard
                key={index}
                country={country}
                isSelected={country === selectedCountry}
                onClick={() => handleCountryClick(country)}
              />
            ))}
          </CountryList>
        )}
        {selectedCountry && (
          <CountryInfo
            name={selectedCountry.name}
            content={selectedCountry.content}
            date={selectedCountry.date}
            image={selectedCountry.image}
          />
        )}
      </SelectedContinent>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  transition: transform 0.5s;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`;

const ListItem = styled.li`
  font-size: 22px;
  font-weight: lighter;
  color: #5d816b;
  flex: 1;

  &.center {
    font-weight: bold;
    color: #c6a785;
    font-size: 38px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #9c89b8;
  font-size: 20px;
  cursor: pointer;
`;

const SelectedContinent = styled.div`
  margin-top: 20px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

const CountryList = styled.div`
  display: flex;
  margin: auto;
  justify-content: flex-start;
  overflow-x: auto;
  width: 50%;
  gap: 30px;

  /* Scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 12px;
    background-color: #dddddd;
  }

  /* Cursor Scrollbar */
  &::-webkit-scrollbar-thumb {
    background-color: var(--gold);
    border-radius: 5px;
  }
`;

export default Continent;
