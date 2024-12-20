import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function DashboardHeader() {
  return (
    <div className="container-fluid bg-body-tertiary">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-head">
            <Link className="navbar-brand" to='/dashboard'>Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse collapsedNavbar" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon="users" /> Members
                  </a>
                  <ul className="dropdown-menu">
                    <Link className="dropdown-item" to="/dashboard/newmember">
                      <FontAwesomeIcon icon="plus" /> New Member
                    </Link>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon="list" /> View History
                      </a>
                    </li>
                    <Link className="dropdown-item" to="/dashboard/updatedmember">
                      <FontAwesomeIcon icon="money-bill" /> Members
                    </Link>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon="money-bill" /> Game Money
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon="list" /> View History
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon="plus" /> View Credit
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FontAwesomeIcon icon="utensils" /> Canteen
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FontAwesomeIcon icon="gear" /> Adminland
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon="user" /> User
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon="money-bill" /> Expenses
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon="cart-shopping" /> Inventory
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon="file" /> Reports
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon="lock" /> Closing
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon="power-off" /> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default DashboardHeader;
