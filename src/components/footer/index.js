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
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row text-left">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <img src={logo} width="30px" height="40px" alt="Logo" />
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 className="mb-0">Быстрые ссылки</h6>

              <ul className="list-unstyled">
                <li>О нас</li>
                <li>
                  <a href="#!" className="text-dark">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Объекты
                  </a>
                </li>
                <li >
                  <a href="#!" className="text-dark">Новости</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Новости</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h6 className="">Контакты</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">г. Бишкек</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">ул. Огонбаева 145</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">osma.@gmail.com</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">+996557100205</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h6 className="mb-0"></h6>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">Пн-Пт с 9:00 – 18:00</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Свяжитесь с нами:</a>
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
          <a className="text-dark" style={{color: "grey"}} href="#">
            {" "}
            © 2021 Copyright: Osma construction
          </a>
          <a
            className="text-dark"
            style={{color: "grey"}}
            href="https://fortylines.io/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            | This web-site is made by Fortylines.io
          </a>
        </div>
      </footer>
    </div>
  );
};
