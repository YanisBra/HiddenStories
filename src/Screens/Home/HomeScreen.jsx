import { Link } from "react-router-dom";
import styled from "styled-components";
import International from "./International/Intenational";
import History from "./History/History";
import France from "./France/France";
import Story from "./Story/Story";
import News from "./News/News";

const HomeScreen = () => {
  return (
    <>
      <Navbar>
        <div>
          <NavLink to="/admin">Admin</NavLink>
        </div>
      </Navbar>
      <History />
      <International />
      <France />
      <Story/>
      <News />
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
