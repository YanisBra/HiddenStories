import styled from "styled-components";
import Continent from "./Continent";

const International = () => {
  return (
    <>
      <Header>
        <h1 className="title">INTERNATIONAL</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna ali.
        </p>
      </Header>
      <Continent />
    </>
  );
};

const Header = styled.div`
margin-top:50px;
  text-align: center;

  h1 {
    font-weight: bold;
    color: var(--green);
  }

  p {
    /* Styles pour le paragraphe */
  }
`;

export default International;
