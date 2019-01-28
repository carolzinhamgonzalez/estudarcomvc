import React from 'react';
import './Header.css';
// import Matters from '../containers/Matters';

const header = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light" id="nav-color">
      <div className="container-fluid">
        <a className="navbar-brand icon-user" id="user-color" href="#"> Visitante</a>
        
        {/* <div className="dropdown">
          <a className="btn dropdown-toggle text-color" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Visualizar matérias
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href= {Matters}>Todas</a>
            <a className="dropdown-item" href="#">Personalizadas</a>
            <a className="dropdown-item" href="#">Gerais</a>
          </div>
        </div> */}

      </div>
    </nav>
  )
};

export default header;
