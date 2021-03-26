import React from "react";
import img from "./images";
import "./index.css";
import { SocialIcons } from "../../components"

export const Header = () => {
  return (
    <header id="header" className="container">
      <div className="row">
        <div
          id="carouselExampleIndicators"
          className="col-11 carousel slide container"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img.img1} className="d-block" alt="img1" />
            </div>
            <div className="carousel-item">
              <img src={img.img2} className="d-block" alt="img2" />
            </div>
            <div className="carousel-item">
              <img src={img.img3} className="d-block" alt="img3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col-1 center-icons">
          <SocialIcons />
        </div>  
      </div>
    </header>
  );
};
