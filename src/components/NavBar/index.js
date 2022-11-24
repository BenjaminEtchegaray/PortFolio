import './style.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar_menu">
      <NavLink className="navbar_item" to="/"> Home </NavLink>
      <NavLink className="navbar_item" to="competences"> Compétences </NavLink>
      <NavLink className="navbar_item" to="projets"> Projets </NavLink>
      <NavLink className="navbar_item" to="contact"> Contact </NavLink>
    </div>
  </nav>
);

export default NavBar;
