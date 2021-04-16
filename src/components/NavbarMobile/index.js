import React from 'react';
import { Link } from "react-router-dom";

import * as ReactRedux from "react-redux";
import logo from "./logo.svg";

import "./index.css";

export const NavbarMobile = () => {
  const lang = ReactRedux.useSelector((state) => state.lang);
  const strings = ReactRedux.useSelector((state) => state.strings[lang]);

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  }

  return (
    <div id="navigation-bar-mobile" className="navbar">

      <div className={"menu d-flex align-items-start flex-column bd-highlight mb-3 " + (isMenuOpen ? 'is-open' : '')}>
        <div className="p-2 bd-highlight" style={{ width: '100%' }}>
          <div className="d-flex justify-content-end">
            <a href="#" className='close' onClick={() => setMenuOpen(false)}>
              <i className="fas fa-times" />
            </a>
          </div>
        </div>

        <ul className="links p-2 bd-highlight mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              {strings["nav-main"]}
            </Link>
          </li>
          <li className="nav-item">
            <a href="/#about-us" className="nav-link" style={{ textDecoration: "none" }} onClick={e => {
              handleLinkClick(e);

              const el = document.getElementById('about-us');
              if (el !== null) {
                el.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}>
              {strings["nav-about-us"]}
            </a>
          </li>
          <li className="nav-item">
            <Link to="/objects" className="nav-link" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              {strings["nav-projects"]}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              {strings["nav-news"]}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/career" className="nav-link" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              {strings["nav-career"]}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
              {strings["nav-contacts"]}
            </Link>
          </li>
        </ul>

        <ul className="contacts p-2 bd-highlight">
          <li className="nav-item">
            <div className='nav-link'>
              <span style={{ marginRight: 16 }}>
                <i className="fas fa-envelope" />
              </span>
              <span>{strings["footer-mail"]}</span>
            </div>
          </li>
          <li className="nav-item">
            <div className='nav-link'>
              <span style={{ marginRight: 16 }}>
                <i className="fas fa-phone" />
              </span>
              <span>{strings["footer-phone"]}</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img
            src={logo}
            width="70px"
            height="70px"
            alt="Osma Group logo"
            className="d-inline-block align-top"
          />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-search" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              {strings[lang]}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={() => setMenuOpen(true)}>
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
