import React from 'react';
import './Header.css';
import { Link} from 'react-router-dom';

// contrução do header(cabeçalho)
const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light" id="nav-color">
      <div className="container-fluid">
        <a className="navbar-brand icon-user" id="user-color" href="#"> Visitante</a>
        
        <div className="dropdown">
          <a className="btn dropdown-toggle text-color" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Visualizar matérias
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <Link to="/" className="dropdown-item">Todas</Link>
            <Link to="/personalizadas" className="dropdown-item"> Personalizadas</Link>
            <Link to="/gerais" className="dropdown-item">Gerais</Link>
          </div>
        </div>

      </div>
    </nav>
  )
};

export default Header;
