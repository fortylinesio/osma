import React from "react";
import * as ReactRedux from "react-redux";
import * as AppRedux from "../../redux";
import logo from "./logo.png";
import * as strings from "../../strings/strings";
import "./index.css";
import ru from "../../strings/ru";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                {strings.ru["nav-main"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {strings.ru["nav-about-us"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./objects">
                {strings.ru["nav-projects"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {strings.ru["nav-news"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {strings.ru["nav-career"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {strings.ru["nav-contacts"]}
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {strings.ru["nav-lang-ru"]}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  {strings.ru["nav-lang-kg"]}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  {strings.ru["nav-lang-en"]}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
