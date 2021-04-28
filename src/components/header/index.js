import React from "react";
import * as ReactRedux from "react-redux";
import img from "./images";
import "./index.css";

import { SocialIcons } from ".."

export const Header = ({ currentPage }) => {

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

  React.useEffect(() => {
    setCurrentImages(pageImages[currentPage] || [])
  }, [currentPage]);

  React.useEffect(() => {
    var myCarousel = document.querySelector('#carouselExampleIndicators')
    var carousel = new window.bootstrap.Carousel(myCarousel, {
      // interval: 2000,
      wrap: false
    })
  }, [currentImages]);

  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <header id="header" className="">
      <div className="container-fluid">
        <div className='row'>
          <div className='col' />
          <div className='col bg-area' />
        </div>
      </div>
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
              {/* {currentImages.map((image, i) => (
                <div key={i} className="carousel-item active">
                  <img src={image} className="d-block" alt="image1" />
                </div>
              ))} */}
              <div className="carousel-item active">
                <img src={img.img1} className="d-block" alt="img1" />
                <div className="img-text">
                  <h1> {strings[lang]["head-company-name"]} </h1>
                  <p> {strings[lang]["head-company-info"]} </p>
                </div>
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
            <SocialIcons />
          </div>
        </div>
      </div>    
    </header>
  );
};
