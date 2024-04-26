import React from "react";
import styled from "styled-components";

const Athlete = ({ name, image, content, video }) => {
  return (
    <Container>
      <h3>{name}</h3>
      <ImageContainer>
        <img className="image" src={image} alt={name} />
        <iframe
          className="video"
          width="150"
          height="150"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </ImageContainer>
      <Content>
        <p>{content}</p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 400px; 
  height: 400px; 
  margin:auto;

  .image {
  }

  .video {
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    border: none;
  }
`;

const Content = styled.div`
  margin-top: 70px;

  p {
    font-weight: lighter;
    font-size: 1rem;
  }
`;

export default Athlete;
