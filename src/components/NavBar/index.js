import './style.scss';
import { NavLink } from 'react-router-dom';
import { routeNavHeader } from 'src/data/navbar';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar_menu">
      {routeNavHeader.map((itemNavbar) => (
        <NavLink
          to={itemNavbar.route}
          key={itemNavbar.id}
          className={({ isActive }) => (
            isActive ? 'navbar_item navbar_item--selected' : 'navbar_item'
          )}
        >
          {itemNavbar.name}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default NavBar;
