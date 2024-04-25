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
  text-align: center;
  margin-top: 50px;

  h1 {
    font-size: 30px;
  }

  p {
    font-size: 12px;
  }
`;

export default International;
