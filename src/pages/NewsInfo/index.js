import React, { useState, useEffect } from "react";
import * as ReactRedux from "react-redux";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import images from "./images";
import "./index.css";

// import ym from 'react-yandex-metrika';
// ym('hit', '/news-info');

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2, itemsToScroll: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 3},
  ];

export const NewsInfo = () => {
    const [data, setData] = useState(null);

    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    const content_array = data?.[0]?.content?.rendered.split('\n\n\n\n');
    const description = content_array?.[0];
    const image = content_array?.[1];

    useEffect(() => {
        fetch('https://osmagroup.000webhostapp.com/wp-json/wp/v2/news')
       .then(res => res.json())
       .then(json => {
         setData(json)
       })
    }, []);

    return (
        <div id="news-info" className="container">
            {
              data?
              <h6 className="card-title"> {data?.[0]?.title?.rendered} </h6> : ""
            }
            <p className="news-date"> {strings[lang]["news-date"]} </p>
            {
              description?
              <p className="news-date" dangerouslySetInnerHTML={{ __html: description }} /> : ""
            }
            <div className="news-gallery">
                <Carousel breakPoints={breakPoints}>
                    <Item className="gallery-item">                        
                        <img src={images.img1} alt="image-gallery" width="260px" height="180px" />
                    </Item>
                    <Item className="gallery-item">
                        <img src={images.img2} alt="image-gallery" width="260px" height="180px" />
                    </Item>
                    <Item className="gallery-item">
                        <img src={images.img3} alt="image-gallery" width="260px" height="180px" />
                    </Item>
                    <Item className="gallery-item">
                        <img src={images.img4} alt="image-gallery" width="260px" height="180px" />
                    </Item>
                    <Item className="gallery-item">
                        <img src={images.img5} alt="image-gallery" width="260px" height="180px" />
                    </Item>                
                </Carousel>
            </div>
        </div>
    );
}