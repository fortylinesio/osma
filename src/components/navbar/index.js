import React from "react";
import * as ReactRedux from "react-redux";
import * as AppRedux from "../../redux";
import logo from "./logo.png";
import * as strings from "../../strings/strings";
import "./index.css";

export const Navbar = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <nav id="navigation-bar" className="navbar navbar-expand-lg navbar-light">
      <div className="container justify-content-between">
        <a className="navbar-brand" href="#">
          {/* заменить на svg */}
          <img
            src={logo}
            width="30px"
            height="40px"
            alt="Osma Group logo"
            className="d-inline-block align-top"
          />
          Osma Group
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

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {strings[lang]["nav-main"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {strings[lang]["nav-about-us"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {strings[lang]["nav-projects"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {strings[lang]["nav-news"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {strings[lang]["nav-career"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {strings[lang]["nav-contacts"]}
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <i className="fas fa-search"></i>
          <ul className="lang-select">
            <select className="form-select" aria-label="language">
              <option defaultValue="ru">{strings[lang]["nav-lang-ru"]}</option>
              <option value="kg">{strings[lang]["nav-lang-kg"]}</option>
              <option value="en">{strings[lang]["nav-lang-en"]}</option>
            </select>
          </ul>
        </div>
      </div>
    </nav>
  );
};
