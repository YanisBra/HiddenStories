import styled from "styled-components";

const SectionHeader = ({ title, description }) => {
  return (
    <Header>
      <h1>{title}</h1>
      <p>{description}</p>
    </Header>
  );
};

const Header = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: var(--green);
    font-family: "Inter";
    background-image: url("../public/img/titlebg.png");
    background-repeat: no-repeat;
    background-position: center center;
  }

  p {
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
  }
`;

export default SectionHeader;
