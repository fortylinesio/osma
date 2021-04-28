import React from "react";
import * as ReactRedux from "react-redux";
import img from "./images";
import "./index.css";

export const HeaderNews = ({ currentPage }) => {

  const pageImages = {
    '/': [
      img.img1,
      img.img2,
    ],
    '/news': [
      img.img3,
    ],
  }

  const [currentImages, setCurrentImages] = React.useState(pageImages[currentPage]);


    return (
      <div className="container-fluid">
        <div className="row bg-image">
          <div
            id="carouselExampleIndicators"
            className="col-11 carousel slide container"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {currentImages.map((image, i) => (
                <button
                  key={i}
                  type="button" 
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={i + 1}
                  className="active"
                  aria-current="true"
                  aria-label={"Slide " + (i + 1)}
                />
              ))}
            </div>
            <div className="carousel-inner">
              {currentImages.map((image, i) => (
                <div key={i} className="carousel-item active">
                  <img src={image} className="d-block" alt="img1" />
                </div>
              ))}
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
          <div className="col-1 d-flex align-items-center">
          </div>
        </div>
      </div>
    )
}
