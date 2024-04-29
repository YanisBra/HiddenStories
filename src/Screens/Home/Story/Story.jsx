import styled from "styled-components";
import Athlete from "./Champion";
import storiesData from "./storiesData";

const Story = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  text-align: center;
  padding: 10px;
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
