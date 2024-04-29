import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar2 from "../../Components/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import International from "./International/Intenational";
import History from "./History/History";
import France from "./France/France";
import Story from "./Story/Story";
import News from "./News/News";
import { Navbar, Nav } from "react-bootstrap"; // Import des éléments de Bootstrap

const HomeScreen = () => {
  return (
    <Container>
      <CustomNavbar variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="#top">HiddenStories</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="#history">History</NavLink>
            <NavLink to="#international">International</NavLink>
            <NavLink to="#france">France</NavLink>
            <NavLink to="#story">Story</NavLink>
            {/* Ajoute d'autres liens ici si nécessaire */}
          </Nav>
        </Navbar.Collapse>
      </CustomNavbar>
      {/* <Navbar2 /> */}
      <LandingPage />
      <History />
      <International />
      <France />
      <Story />
      {/* <News /> */}
    </Container>
  );
};

const Container = styled.div`
  font-family: "Barlow";
`;

// Style de la barre de navigation design
// const Navbar = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #333333;
//   padding: 10px 20px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

const CustomNavbar = styled(Navbar)`
  padding: 10px;
  backdrop-filter: blur(3px);
  background-color: rgba(36, 36, 36, 0.4);
  .ml-auto {
    margin-left: auto;
  }
  /* Couleur de fond semi-transparente */
`;

// Style des liens de navigation
const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  padding: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

export default HomeScreen;
