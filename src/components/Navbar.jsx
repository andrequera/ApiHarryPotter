import React from "react";
import imglogo from '../img/logo_HarryPotter.png'
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img src={imglogo}/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link to="/home"><span classNameName="mb-0 h3">Home</span></Link>
              {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
            </li>
            <li className="nav-item">
            <Link to="/personajes"><span classNameName="mb-0 h3">Personajes</span></Link>
            </li>
            <li className="nav-item">
            <Link to="/casas"><span classNameName="mb-0 h3">Casas</span></Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Favoritos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/personajes"><a className="dropdown-item">Personajes</a></Link>
                <Link to="/casas"><a className="dropdown-item">Casas</a></Link>
                <Link to="/home"><a className="dropdown-item">Home</a></Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>   
    );
};
export default Navbar;