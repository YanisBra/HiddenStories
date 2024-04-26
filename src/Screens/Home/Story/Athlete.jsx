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
          width="190"
          height="108"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
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
  margin: auto;

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
