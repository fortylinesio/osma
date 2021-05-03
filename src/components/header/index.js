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
  
  /* TODO: define the real images for all pages */

  const pageImages = {
    '/': [
      img.img1,
      img.img2,
    ],
    '/objects': [
      img.img2,
      img.img2,
    ],
    '/objects-info': [
      img.img3,
      img.img3,
    ],
    '/news': [
      img.img4,
      img.img4,
    ],
    '/news-info': [
      img.img5,
      img.img5,
    ],
    '/career': [
      img.img6,
      img.img6,
    ],
    '/contacts': [
      img.img7,
      img.img7,
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
          className='carousel'
          showArrows={false}
          enableMouseSwipe={false}
          ref={carouselRef}
          onChange={(currentItem) => setCurrPos(currentItem.index)}
        >
          {currentImages.map((image, i) => (
            <div key={i}>
              <img style={{ maxWidth: '100%' }} src={image} alt={'Image ' + (i + 1)} />
            </div>
          ))}
        </Carousel>
        <div className='arrows'>
          <div className='counter'>
            {formatNumberToDecimal(currPos + 1)} / {formatNumberToDecimal(currentImages.length)}
          </div>
          <button className='arrow prev' onClick={e => {
            carouselRef.current.slidePrev();
          }}>Prev</button>
          <button className='arrow next' onClick={e => {
            carouselRef.current.slideNext();
          }}>Next</button>
        </div>
      </div>
      <SocialIcons />
    </header>
  );
};

const formatNumberToDecimal = (n) => {
  return n < 10 ? '0' + n : n;
}
