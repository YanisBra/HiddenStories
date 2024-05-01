import { Link } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "./LandingPage/LandingPage";
import International from "./International/Intenational";
import History from "./History/History";
import France from "./France/France";
import Stories from "./Stories/Stories";
import { Navbar, Nav } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container>
      <CustomNavbar variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="#top">HiddenStories</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink href="#history">History</NavLink>
            <NavLink href="#international">International</NavLink>
            <NavLink href="#france">France</NavLink>
            <NavLink href="#story">Stories</NavLink>
            <NavLink>
              <StyledLink to="/admin">Admin</StyledLink>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </CustomNavbar>
      <LandingPage />
      <History />
      <International />
      <France />
      <Stories />
    </Container>
  );
};

const Container = styled.div`
  font-family: "Barlow";
`;

const CustomNavbar = styled(Navbar)`
  padding: 10px;
  backdrop-filter: blur(3px);
  background-color: rgba(36, 36, 36, 0.4);
  .ml-auto {
    margin-left: auto;
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
