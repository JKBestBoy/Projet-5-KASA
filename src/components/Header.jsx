import { NavLink, Link } from "react-router-dom";
import logo from '../assets/logo.png';
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Kasa" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
