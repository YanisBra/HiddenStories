import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Config/firebase";
import styled from "styled-components";
import Athlete from "./Champion";

const Stories = () => {
  const [Stories, setStories] = useState([]);

  useEffect(() => {
    const fetchNewsItems = async () => {
      try {
        const q = collection(db, "champions");
        const querySnapshot = await getDocs(q);

        const fetchedNewsItems = [];
        querySnapshot.forEach((doc) => {
          fetchedNewsItems.push({ id: doc.id, ...doc.data() });
        });

        setStories(fetchedNewsItems);
      } catch (error) {
        console.error("Error fetching news items: ", error);
      }
    };

    fetchNewsItems();
  }, []);

  return (
    <StoryContainer id="story">
      <Header>
        <h1>Champions de France</h1>
      </Header>
      {Stories.map((story) => (
        <Athlete
          key={story.id}
          name={story.name}
          description={story.description}
          image={story.image}
        />
      ))}
    </StoryContainer>
  );
};

const StoryContainer = styled.div`
  margin-top: 50px;
  text-align: center;
  padding: 10px;
  max-width: 1200px;
  margin: 50px auto auto auto;
`;

const Header = styled.div`
  text-align: center;

  h1 {
    font-weight: bold;
    color: var(--gold);
  }

`;

export default Stories;
