import React from 'react';
import * as ReactRedux from "react-redux";
import { Link } from 'react-router-dom';
// import * as Components from "../../components";
import "./index.css";

export const Objects = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
      <div id="objects" className="container">
          <div className="row row-cols-3 justify-content-center">                
              <div className="col card">
                <img className="card-img-top"></img>
                <div className="card-body">
                  <h5 className="card-title">{strings[lang]["objects-title"]}</h5>
                  <div>
                    {/* <i className="geolocation-icon"></i> */}
                    <p className="card-text">{strings[lang]["objects-address"]}</p>
                  </div>
                  <Link to="/object-info-page">
                    <a href="#" className="card-link">{strings[lang]["objects-more"]}</a>
                  </Link>
                </div>
              </div>
              <div className="col card">
                  <img className="card-img-top"></img>
                  <div className="card-body">
                    <h5 className="card-title">{strings[lang]["objects-title"]}</h5>
                    <p className="card-text">{strings[lang]["objects-address"]}</p>
                    <Link to="/object-info-page">
                      <a href="#" className="card-link">{strings[lang]["objects-more"]}</a>
                    </Link>
                  </div>
              </div>
              <div className="col card">
                  <img className="card-img-top"></img>
                  <div className="card-body">
                    <h5 className="card-title">{strings[lang]["objects-title"]}</h5>
                    <p className="card-text">{strings[lang]["objects-address"]}</p>
                    <Link to="/object-info-page">
                      <a href="#" className="card-link">{strings[lang]["objects-more"]}</a>
                    </Link>
                  </div>
              </div>
          </div>
      </div>
      
  );
}