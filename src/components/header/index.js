import React from "react";
import Carousel from "react-elastic-carousel";
import * as ReactRedux from "react-redux";

import { SocialIcons } from ".."
import img from "./images";

import "./index.css";

/**
 * Used React Ealstic Carousel as a slider component. For more info:
 * https://sag1v.github.io/react-elastic-carousel/#styling
 */

export const Header = ({ currentPage }) => {

  const pageImages = {
    '/': [
      {
        image: img.img1,
        title: "OSMA GROUP",
        subtitle: "Osma  Group занимается строительно-монтажными работами любой сложности начиная с отделочных работ заканчивая строительством зданий повышенной ответственности.",       
      },
      {
        image: img.img8,
        title: "OSMA GROUP",
        subtitle: "Osma  Group занимается строительно-монтажными работами любой сложности начиная с отделочных работ заканчивая строительством зданий повышенной ответственности.",       
      },
    ],
    '/objects': [
      {
        image: img.img2,
        title: "",
        subtitle: "",       
      },
      {
        image: img.img2,
        title: "",
        subtitle: "",       
      },
    ],
    '/objects-info': [
      {
        image: img.img3,
        title: "",
        subtitle: "",       
      },
      {
        image: img.img3,
        title: "",
        subtitle: "",       
      },
    ],
    '/news': [
      {
        image: img.img4,
        title: "",
        subtitle: "",       
      },
      {
        image: img.img4,
        title: "",
        subtitle: "",       
      },
    ],
    '/news-info': [
      {
        image: img.img5,
        title: "",
        subtitle: "",       
      },
      {
        image: img.img5,
        title: "",
        subtitle: "",       
      },
    ],
    '/career': [
      {
        image: img.img6,
        title: "",
        subtitle: "",       
      },
      {
        image: img.img6,
        title: "",
        subtitle: "",       
      },
    ],
    '/contacts': [
      {
        image: img.img7,
        title: "",
        subtitle: "",       
      },
      {
        image: img.img7,
        title: "",
        subtitle: "",       
      },
    ],
  }

  const carouselRef = React.useRef(null);

  const [currentImages, setCurrentImages] = React.useState(pageImages[currentPage]);
  const [currPos, setCurrPos] = React.useState(0);


  React.useEffect(() => {
    setCurrentImages(pageImages[currentPage] || [])
  }, [currentPage]);

  React.useEffect(() => {
    carouselRef.current.goTo(0);
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
      <div className="container-fluid carousel-holder">
        <Carousel
          className="carousel"
          showArrows={false}
          enableMouseSwipe={false}
          ref={carouselRef}
          onChange={(currentItem) => setCurrPos(currentItem.index)}
        >
          {currentImages.map((item, i) => (
            <div key={i} className="carousel-slide">
              <div className="carousel-slide-details">
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
              </div>
              <img className="carousel-slide-image" style={{ maxWidth: '100%' }} src={item.image} alt={'Image ' + (i + 1)} />
            </div>
          ))}
        </Carousel>

        <div className='arrows'>
          <div className='counter'>
            {formatNumberToDecimal(currPos + 1)} / {formatNumberToDecimal(currentImages.length)}
          </div>
          <button 
            className='carousel-control-prev arrow' 
            onClick={e => { carouselRef.current.slidePrev(); }}>
              <span className="carousel-control-prev-icon" aria-hidden="true"/>
          </button>
          <button 
            className='carousel-control-next arrow' 
            onClick={e => { carouselRef.current.slideNext(); }}>
              <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>        
      </div>
      <SocialIcons />
    </header>
  );
};

const formatNumberToDecimal = (n) => {
  return n < 10 ? '0' + n : n;
}
