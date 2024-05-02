import { Link } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "./LandingPage/LandingPage";
import International from "./International/Intenational";
import History from "./History/History";
import France from "./France/France";
import Stories from "./Stories/Stories";
import { Navbar, Nav } from "react-bootstrap";
import Footer from "../../Components/Footer";

const HomeScreen = () => {
  return (
    <Container>
      <CustomNavbar variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="#top" className="hiddenstories">
          <img className="logo" src="/img/logo.png" alt="logo" />
          HIDDEN STORIES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink href="#history">HISTOIRE</NavLink>
            <NavLink href="#international">INTERNATIONAL</NavLink>
            <NavLink href="#france">FRANCE</NavLink>
            <NavLink href="#story">CHAMPIONS DE FRANCE</NavLink>
            <NavLink>
              <StyledLink to="/admin">ADMIN</StyledLink>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </CustomNavbar>
      <LandingPage />
      <History />
      <International />
      <France />
      <Stories />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  font-family: "Barlow";
  background-color: var(--white);
`;

const CustomNavbar = styled(Navbar)`
  padding: 10px;
  backdrop-filter: blur(3px);
  background-color: rgba(36, 36, 36, 0.4);
  font-family: "KoHo";
  font-weight: bold;
  .ml-auto {
    margin-left: auto;
  }

  .hiddenstories {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 60px;

    @media (max-width: 800px) {
      /* display: none; */
    }
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  padding: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--green);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default HomeScreen;
