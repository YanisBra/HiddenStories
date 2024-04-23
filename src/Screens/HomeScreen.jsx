import { Link } from "react-router-dom";
import styled from "styled-components";
import International from "../Sections/Intenational";
import History from "../Sections/History";
import Slider from "../Components/Slider";



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
      <History />
      <International />
      <Slider />
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

export default HomeScreen;
