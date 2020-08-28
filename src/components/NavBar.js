import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faCartPlus, faIdCard, faFontAwesomeLogoFull } from '@fortawesome/free-solid-svg-icons'
import logo from "../logo.png";

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100">
      <a className="navbar-brand" href="#">
      <img src={logo} alt="logo..." style={{width:"3.3rem"}}/>Decoartika
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
           <FontAwesomeIcon icon= {faBold}/>
            <a className="nav-link" href="#">Blog <span className="sr-only">(current)</span></a>
          </li>
          
          <li className="nav-item dropdown">
          <FontAwesomeIcon icon= {faCartPlus}/>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Productos
            </a>
            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <a className="dropdown-item text-white" href="#">Cuadros</a>
              <a className="dropdown-item text-white" href="#">Ilustración</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-white" href="#">Decoración</a>
            </div>
          </li>
          <li className="nav-item">
          <FontAwesomeIcon icon= {faIdCard}/>
            <a className="nav-link" href="#">Contacto</a>
          </li>
         
        </ul>
       
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Busca algo" aria-label="Busca algo"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
    )
}

export default NavBar
