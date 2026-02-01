import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Bella Italia Logo" className="logo-img" />
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className={`navbar-link ${isActive('/')}`}>
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/menu" className={`navbar-link ${isActive('/menu')}`}>
              Menú
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className={`navbar-link ${isActive('/contact')}`}>
              Contacto
            </Link>
          </li>
        </ul>

        <Link to="/contact" className="btn btn-primary navbar-btn">
          Reservar Mesa
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
