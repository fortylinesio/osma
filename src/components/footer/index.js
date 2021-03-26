import React from "react";
import * as ReactRedux from "react-redux";
import * as Components from "../../components";
import logo from "./logo.png";
import {Link} from "react-router-dom";
import "./index.css";

export const Footer = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="footer">
      <footer className="text-center text-lg-start">
        <div className="container p-4">
          <div className="row text-left">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <img src={logo} width="30px" height="40px" alt="Logo" />
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 className="mb-0">{strings[lang]["footer-fast-links"]}</h6>

              <ul className="list-unstyled">
                <li>
                  <a href="#aboutUs">{strings[lang]["footer-about-us"]}</a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    {strings[lang]["footer-services"]}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    {strings[lang]["footer-objects"]}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    {strings[lang]["footer-news"]}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    {strings[lang]["footer-contacts"]}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h6 className="">{strings[lang]["footer-contacts"]}</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-light">
                    {strings[lang]["footer-city"]}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    {strings[lang]["footer-street"]}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    {strings[lang]["footer-mail"]}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    {strings[lang]["footer-phone"]}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h6 className="mb-0"></h6>

              <ul className="list-unstyled">
                <li>
                  <p href="#!" className="text-light">
                    {strings[lang]["footer-schedule"]}
                  </p>
                </li>
                <li>
                  <p href="#!" className="text-light">
                    {strings[lang]["footer-contact-us"]}
                  </p>
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3">
          <div className="d-flex justify-content-end">
            <div style={{marginRight: 15, marginTop: 25, color: "grey"}}></div>
            <div style={{marginTop: 25}}></div>
          </div>
          <a className="text-light" style={{color: "grey"}} href="#">
            {strings[lang]["footer-copyright"]}
          </a>
          <a
            className="text-light"
            style={{color: "grey"}}
            href="https://fortylines.io/"
            target="_blank"
            rel="noreferrer"
          >
            {strings[lang]["footer-fortylines"]}
          </a>
        </div>
      </footer>
    </div>
  );
};
