import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../Config/firebase";
import styled from "styled-components";

// Styled Components pour les éléments HTML
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const NewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NewsItem = styled.li`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
`;

const NewsTitle = styled.strong`
  font-size: 18px;
  margin-bottom: 5px;
`;

const NewsContent = styled.p`
  margin: 0;
`;

// Composant News
const News = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNewsItems = async () => {
      try {
        // Créer une requête pour récupérer les documents avec le thème "news"
        const q = query(
          collection(db, "content"),
          where("theme", "==", "news")
        );
        const querySnapshot = await getDocs(q);

        const fetchedNewsItems = [];
        querySnapshot.forEach((doc) => {
          fetchedNewsItems.push({ id: doc.id, ...doc.data() });
        });

        setNewsItems(fetchedNewsItems);
      } catch (error) {
        console.error("Error fetching news items: ", error);
      }
    };

    fetchNewsItems();
  }, []);

  return (
    <Container>
      <Title>News</Title>
      <NewsList>
        {newsItems.map((news) => (
          <NewsItem key={news.id}>
            <NewsTitle>{news.title}</NewsTitle>
            <NewsContent>{news.content}</NewsContent>
          </NewsItem>
        ))}
      </NewsList>
    </Container>
  );
};

export default News;
