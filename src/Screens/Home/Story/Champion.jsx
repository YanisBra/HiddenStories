import React from "react";
import styled from "styled-components";

const Champion = ({ name, image, content, video }) => {
  return (
    <Container>
      <h2>{name}</h2>
      <ImageContainer>
        <img className="image" src={image} alt={name} />
        {/* <iframe
          className="video"
          width="190"
          height="108"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}
      </ImageContainer>
      <Content>
        <p>{content}</p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  max-width: 1400px;
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
  position: relative;
  margin-top: 20px;

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
  margin-top: 30px;

  p {
    font-weight: lighter;
    font-size: 12px;
    @media (min-width: 800px) {
      font-size: 1rem;
    }
  }
`;

export default Champion;
