import styled from "styled-components";

const International = () => {
  return (
    <Header>
      <h1 className="title">International</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna ali.
      </p>
    </Header>
  );
};

const Header = styled.div`
  background-color: grey; 
  text-align: center;
  padding-bottom: 50px;

    h1 {
      font-size: 30px;
    };

    p{
      font-size:12px;
    };

`;

export default International;
