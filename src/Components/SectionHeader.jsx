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
  margin: 50px auto;
  text-align: center;
  max-width: 1400px;

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: var(--green);
    font-family: "KoHo";
    background-image: url("../public/img/titlebg.png");
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: 30px;
  }

  p {
    margin: auto;
    font-size: 14px;
    font-weight: 300;
    @media (min-width: 800px) {
      font-size: 1rem;
    }
  }
`;

export default SectionHeader;
