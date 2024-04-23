import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hammer from "hammerjs";

const continents = [
  "Afrique",
  "Europe",
  "Asia",
  "Oceanie",
  "Amerique",
];

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
  font-weight:lighter;
  color: #5D816B;
  flex: 1;

  &.center {
    font-weight: bold;
    color:#C6A785;
    font-size: 38px;

    opacity: 1;
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

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % continents.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + continents.length) % continents.length
    );
  };

  const getVisibleContinents = () => {
    const leftIndex =
      (currentIndex - 1 + continents.length) % continents.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % continents.length;

    return [
      { index: leftIndex, continent: continents[leftIndex] },
      { index: centerIndex, continent: continents[centerIndex] },
      { index: rightIndex, continent: continents[rightIndex] },
    ];
  };

  const handleContinentClick = (index) => {
    if (index === getVisibleContinents()[0].index) {
      prev(); // Cliquer sur le continent à gauche fait appel à la fonction 'prev'
    } else if (index === getVisibleContinents()[2].index) {
      next(); // Cliquer sur le continent à droite fait appel à la fonction 'next'
    }
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
              {continent}
            </ListItem>
          ))}
        </List>

        <Button onClick={next}>Suivant</Button>
      </Container>

      <div className="swipe"></div>
    </>
  );
};

export default Slider;
