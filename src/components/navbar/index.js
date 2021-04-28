import React from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";

import logo from "./logo.svg";
import "./index.css";


export const Navbar = ({ currentPage }) => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);


  // const handleLanguageClick = (lang: 'en' | 'de' | 'ru') => (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   dispatch(AppRedux.SetLanguage(lang));
  // };

  return (
    <nav id="navigation-bar" className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid justify-content-between">
        <a href="/" className="navbar-brand">
          <img
            src={logo}
            width="70px"
            height="70px"
            alt="Osma Group logo"
            className="d-inline-block align-top"
          />
        </a>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ textDecoration: "none" }}>
                {strings.ru["nav-main"]}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#about-us" className="nav-link" style={{ textDecoration: "none" }} onClick={e => {
                const el = document.getElementById('about-us');
                if (el !== null) {
                  el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}>
                {strings[lang]["nav-about-us"]}
              </a>
            </li>
            <li className="nav-item">
              <Link to="/objects" className="nav-link" style={{ textDecoration: "none" }}>
                {strings.ru["nav-projects"]}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link" style={{ textDecoration: "none" }}>
                {strings[lang]["nav-news"]}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/career" className="nav-link" style={{ textDecoration: "none" }}>
                {strings[lang]["nav-career"]}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className="nav-link" style={{ textDecoration: "none" }}>
                {strings[lang]["nav-contacts"]}
              </Link>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <i className="d-flex fas fa-search"></i>
        <ul className="d-flex lang-select">
          <select className="form-select" aria-label="language">
            <option defaultValue="ru">{strings[lang]["nav-lang-ru"]}</option>
            <option value="kg">{strings[lang]["nav-lang-kg"]}</option>
            <option value="en">{strings[lang]["nav-lang-en"]}</option>
          </select>
        </ul>
      </div>
    </nav>
  );
};
