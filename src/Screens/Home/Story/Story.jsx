import styled from "styled-components";
import Athlete from "./Champion";
import storiesData from "./storiesData";

const Story = () => {
  return (
    <StoryContainer id="story">
      <Header>
        <h1>Champions de France</h1>
      </Header>
      {storiesData.map((item) => (
        <Athlete
          key={item.name}
          name={item.name}
          content={item.content}
          image={item.image}
          video={item.video}
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

  p {
    /* Styles pour le paragraphe */
  }
`;

export default Story;
