import styled from "styled-components";

const Footer = () => {
  return <FooterContainer></FooterContainer>;
};

const FooterContainer = styled.div`
  height: 150px;
  background-color: var(--green);

  @media (min-width: 800px) {
    height: 200px;
  }
`;

export default Footer;
