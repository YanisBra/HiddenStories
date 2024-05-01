import React from "react";
import styled from "styled-components";

const Champion = ({ name, image, description }) => {
  return (
    <Container>
      <h2>{name}</h2>
      <ImageContainer>
        <img className="image" src={image} alt={name} />
      </ImageContainer>
      <Content>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  margin: auto auto 20px auto;

  h2 {
    font-family: "KoHo";
    font-weight: bold;
    font-size: 22;
    @media (min-width: 800px) {
      font-size: 2rem;
    }
  }
`;

const ImageContainer = styled.div`
  margin-top: 20px;

  img {
    max-width: 70%;
    @media (min-width: 800px) {
      max-width: 50%;
    }
  }
`;

const Content = styled.div`
  margin-top: 30px;

  p {
    font-weight: 300;
    font-size: 12px;
    @media (min-width: 800px) {
      font-size: 17px;
    }
  }
`;

export default Champion;
