import React from "react";
import * as Component from "..";
import * as ReactRedux from "react-redux";
import "./index.css";
import img from "./images";
import {Link} from "react-router-dom";

export const News = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);
  return (
    <div>
      <Component.Navbar />
      <Component.Header />
      <div id="news" className="container">
        <div className="row row1">
          <h1>{strings[lang]["news-title"]}</h1>
          <div className="col-md-6">
            <div className="card card-cstm h-100">
              <img src={img.img1} className="card-img-top img-1" alt="..." />
              <div className="card-body card-body-cstm">
                <p className="card-text">
                  Коттеджный городок в с. Люксембург Ысык-Атинского района
                </p>
                <div className="row row-not">
                  <p className="col not">26.01.2021</p>
                  <a className="col" href="#">
                    <p className="not">Подробнее</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-cstm h-100">
              <img src={img.img2} className="card-img-top img-2" alt="..." />
              <div className="card-body card-body-cstm">
                <p className="card-text">Тепловые сети систем централизованного теплоснабжения</p>
                <div className="row row-not">
                  <p className="col not">26.01.2021</p>
                  <a className="col" href="#">
                    <p className="not">Подробнее</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row2">
          <div className="col-md-3">
            <div className="card h-100">
              <img src={img.img3} className="card-img-top img-3" alt="..." />
              <div className="card-body">
                <p className="card-text">Новости архитектуры и дизайна в мире</p>
                <div className="row row-not">
                  <p className="col not">26.01.2021</p>
                  <a className="col" href="#">
                    <p className="not">Подробнее</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100">
              <img src={img.img4} className="card-img-top img-4" alt="..." />
              <div className="card-body">
                <p className="card-text">Новости архитектуры и дизайна в мире</p>
                <div className="row row-not">
                  <p className="col not">26.01.2021</p>
                  <a className="col" href="#">
                    <p className="not">Подробнее</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100">
              <img src={img.img5} className="card-img-top img-5" alt="..." />
              <div className="card-body">
                <p className="card-text">Новости архитектуры и дизайна в мире</p>
                <div className="row row-not">
                  <p className="col not">26.01.2021</p>
                  <a className="col" href="#">
                    <p className="not">Подробнее</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100">
              <img src={img.img3} className="card-img-top img-5" alt="..." />
              <div className="card-body">
                <p className="card-text">Новости архитектуры и дизайна в мире</p>
                <div className="row row-not">
                  <p className="col not">26.01.2021</p>
                  <a className="col" href="#">
                    <p className="not">Подробнее</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Component.Footer />
    </div>
  );
};
