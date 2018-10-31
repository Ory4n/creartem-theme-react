import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="page-header page-header-alpha scrolled-white">

      <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
        <span className="menu-icon menu-icon-normal">
          <span className="bars">
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </span>
        </span>
      </button>
      <div className="navbar navbar-wrapper">
        <div className="navbar-brand">
          <a href="/">
            <span className="logo">
              <img className="light-logo" src="/theme/img/logo.png" alt="Creartem Logo" />
            </span>
            <span className="text">
              <span className="line">Creartem</span>

            </span>
          </a>
        </div>

        <div className="all-menu-wrapper" id="navbarMenu">
          <nav className="navbar-mainmenu">
            <div className="click-exit"></div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/students">Students</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/faq">Faqs</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="navbar-footer">
        <div className="row">
          <div className="col-7 d-flex align-items-end">
          <p className="note display-small">&copy; 2018 Creartem
          </p>
        </div>
</div>
          <div className="menu-social text-primary">
            <div className="row">
              <div className="col-7 d-flex align-items-end">

                <p className="note display-small">Designed & Developed by CodeDesigns
                </p>
                <br />
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
