import React from "react";
import styled from "styled-components";
import SectionHeader from "../../../Components/SectionHeader";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import historyData from "./historyData";

const History = () => {
  return (
    <Container>
      <SectionHeader
        title="L'HISTOIRE DU TENIS DE TABLE"
        description="Le ping-pong, ou tennis de table, a émergé en Angleterre au 19e siècle comme un jeu de salon informel. Il a gagné en popularité et des règles structurées ont été établies dans les années 1880. En 1926, la Fédération Internationale de Tennis de Table (ITTF) a été fondée pour réglementer le sport. Le ping-pong est devenu un sport olympique en 1988. Aujourd'hui, il est apprécié à la fois comme un sport de compétition et comme un passe-temps récréatif dans le monde entier."
      />

      {historyData.map((item) => {
        const isOdd = parseInt(item.id) % 2 !== 0;

        return isOdd ? (
          <LeftContent
            key={item.id}
            title={item.title}
            content={item.content}
            years={item.years}
            lastYear={item.lastYear}
            dateTop={item.dateTop}
            dateBot={item.dateBot}
            image={item.image}
          />
        ) : (
          <RightContent
            key={item.id}
            title={item.title}
            content={item.content}
            years={item.years}
            lastYear={item.lastYear}
            dateTop={item.dateTop}
            dateBot={item.dateBot}
            image={item.image}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
`;

export default History;
