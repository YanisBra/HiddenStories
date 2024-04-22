import { Link } from "react-router-dom";
import styled from "styled-components";
import LeftContent from "../Components/LeftContent";
import RightContent from "../Components/RightContent";
import TopContent from "../Components/TopContent";
import BottomContent from "../Components/BottomContent";



const HomeScreen = () => {
  return (
    <>
      <Navbar>
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </div>
        <div>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </Navbar>
      <ContentContainer>
        <TopContent />
        <LeftContent />
        <RightContent />
        <BottomContent />
      </ContentContainer>
    </>
  );
};

// Style de la barre de navigation design
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const ContentContainer = styled.div`
`;

export default HomeScreen;
