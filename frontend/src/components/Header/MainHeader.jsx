import React from 'react';
import '../Header/MainHeader.css'
import logo from '../../assetes/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='container-fluid headerparent'>
      <nav className="navbar navbar-expand-lg navbarExtended">
        <div className="container">
          <a className="navbar-brand imagebrand" href="#first-section">
            <img src={logo} alt="logo image" />
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse collapseNavbar" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <a className="nav-link" href="#features-section">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">24/7 Support</a>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/login"><button className="btn btn-outline-primary" type="button">Login</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
