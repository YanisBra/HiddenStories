import React, { useState, useEffect } from "react";
import styled from "styled-components";
import internationalData from "./internationalData";
import CountryCard from "./CountryCard";
import CountryInfo from "./CountryInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const Continent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedContinent, setSelectedContinent] = useState(
    internationalData[currentIndex]
  );
  const [selectedCountry, setSelectedCountry] = useState(
    selectedContinent.countries[0]
  );

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
      <ContinentContainer>
        <ContinentList>
          <FontAwesomeIcon className="icon" onClick={prev} icon={faCaretLeft} />

          {getVisibleContinents().map(({ continent, index }, i) => (
            <ContinentItem
              key={i}
              className={i === 1 ? "center" : ""}
              onClick={() => handleContinentClick(index)}
            >
              {continent.name}
            </ContinentItem>
          ))}
          <FontAwesomeIcon
            className="icon"
            onClick={next}
            icon={faCaretRight}
          />
        </ContinentList>
      </ContinentContainer>{" "}
      <div className="swipe"></div>
      <SelectedContinent>
        <img src={selectedContinent.image} alt={selectedContinent.name} />
        {selectedContinent.countries && (
          <CountryList>
            {selectedContinent.countries.map((country, index) => (
              <CountryCard
                key={index}
                country={country}
                selected={country === selectedCountry}
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
            flag={selectedCountry.flag}
            champions={selectedCountry.champions}
          />
        )}
      </SelectedContinent>
    </>
  );
};

const ContinentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  overflow: hidden;
`;

const ContinentList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  transition: transform 0.5s;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin: auto;
  @media (min-width: 800px) {
    max-width: 1400px;
    width: 90%;
  }

  /* background-color: #f9b9b9; */

  .icon {
    color: var(--gold);
    font-size: 30px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ContinentItem = styled.li`
  font-size: 18px;
  font-family: "KoHo";
  font-weight: lighter;
  color: #5d816b;
  flex: 1;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }

  &.center {
    font-weight: 500;
    color: #c6a785;
    font-size: 30px;
    @media (min-width: 800px) {
      font-size: 2.5rem;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const SelectedContinent = styled.div`
  margin-top: 20px;
  text-align: center;
  width: 100%;
  margin: auto;
  @media (min-width: 800px) {
    width: 60%;
  }
  /* background-image:{selectedContinent.image}; */

  /* background-color: #d1c0f7; */

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
  margin: 30px auto auto auto;
  justify-content: flex-start;
  overflow-x: auto;
  width: 100%;
  gap: 20px;

  /* background-color: #e7f7c0; */

  /* Scrollbar */
  &::-webkit-scrollbar {
    height: 6px;
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
