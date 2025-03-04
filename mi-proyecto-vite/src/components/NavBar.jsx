import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Mi Tienda
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/ropa">
              Ropa
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/electronica">
              Electrónica
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/accesorios">
              Accesorios
            </Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
