import { NavLink } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Pendentes</NavLink>
        </li>
        <li>
          <NavLink to="pausadas">Pausadas</NavLink>
        </li>
        <li>
          <NavLink to="finalizadas">Finalizadas</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
