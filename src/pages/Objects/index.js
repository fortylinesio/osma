import React, { useState, useEffect } from 'react';
import * as ReactRedux from "react-redux";
import { Link } from 'react-router-dom';

import "./index.css";

// import ym from 'react-yandex-metrika';
// ym('hit', '/objects');

export const Objects = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  const [data, setData] = useState(null);

  const content_array = data?.[0]?.content?.rendered.split('\n\n\n\n');
  const address = content_array?.[0];

  useEffect(() => {
     fetch('https://osmagroup.000webhostapp.com/wp-json/wp/v2/building-objects')
    .then(res => res.json())
    .then(json => {
      setData(json)
    })
  }, []);

  return (
    <div id="objects-page" className="">
      <div id="objects" className="container">
      <h1 className="objects-name">{strings[lang]["objects-name"]}</h1>
        <div className="row row-cols-3 justify-content-center">
          <div className="col card">
            <img className="card-img-top" alt='' />
            <div className="card-body">
              {
                data?
                <h6 className="card-title"> {data?.[0]?.title?.rendered} </h6> : ""
              }
              <div className="d-flex flex-row card-address">
                <svg
                  className="geo-icon"
                  width="15"
                  height="25"
                  viewBox="0 0 20 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd" d="M9.94473 0C4.72841 0 0.509521 4.695 0.509521 10.5C0.509521 18.375 9.94473 30 9.94473 30C9.94473 30 19.3799 18.375 19.3799 10.5C19.3799 4.695 15.1611 0 9.94473 0ZM3.2053 10.5C3.2053 6.36 6.22456 3 9.94473 3C13.6649 3 16.6842 6.36 16.6842 10.5C16.6842 14.82 12.8023 21.285 9.94473 25.32C7.14113 21.315 3.2053 14.775 3.2053 10.5ZM6.57502 10.5C6.57502 8.42893 8.08369 6.75 9.94473 6.75C11.1486 6.75 12.2611 7.46475 12.863 8.625C13.4649 9.78525 13.4649 11.2147 12.863 12.375C12.2611 13.5353 11.1486 14.25 9.94473 14.25C8.08369 14.25 6.57502 12.5711 6.57502 10.5Z"
                    fill="#054468"
                  />
                </svg>
                {
                  address?
                  <p className="geo-text" dangerouslySetInnerHTML={{ __html: address }} /> : ""
                }
              </div>
                <Link to="/objects-info" className="card-link">                    
                  {strings[lang]["objects-more"]}
                </Link> 
            </div>
          </div>
          <div className="col card">
            <img className="card-img-top" alt='' />
            <div className="card-body">
              {
                data?
                <h6 className="card-title"> {data?.[0]?.title?.rendered} </h6>: ""
              }
              <div className="d-flex flex-row card-address">
                <svg
                  className="geo-icon"
                  width="15"
                  height="25"
                  viewBox="0 0 20 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd" d="M9.94473 0C4.72841 0 0.509521 4.695 0.509521 10.5C0.509521 18.375 9.94473 30 9.94473 30C9.94473 30 19.3799 18.375 19.3799 10.5C19.3799 4.695 15.1611 0 9.94473 0ZM3.2053 10.5C3.2053 6.36 6.22456 3 9.94473 3C13.6649 3 16.6842 6.36 16.6842 10.5C16.6842 14.82 12.8023 21.285 9.94473 25.32C7.14113 21.315 3.2053 14.775 3.2053 10.5ZM6.57502 10.5C6.57502 8.42893 8.08369 6.75 9.94473 6.75C11.1486 6.75 12.2611 7.46475 12.863 8.625C13.4649 9.78525 13.4649 11.2147 12.863 12.375C12.2611 13.5353 11.1486 14.25 9.94473 14.25C8.08369 14.25 6.57502 12.5711 6.57502 10.5Z"
                    fill="#054468"
                  />
                </svg>
                {
                  address?
                  <p className="geo-text" dangerouslySetInnerHTML={{ __html: address }} /> : ""
                }
              </div>
              <Link to="/objects-info" className="card-link">
                {strings[lang]["objects-more"]}
              </Link>
            </div>
          </div>
          <div className="col card">
            <img className="card-img-top" alt='' />
            <div className="card-body">
              {
                data?
                <h6 className="card-title"> {data?.[0]?.title?.rendered} </h6>: ""
              }
              <div className="d-flex flex-row card-address">
                <svg
                  className="geo-icon"
                  width="15"
                  height="25"
                  viewBox="0 0 20 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd" d="M9.94473 0C4.72841 0 0.509521 4.695 0.509521 10.5C0.509521 18.375 9.94473 30 9.94473 30C9.94473 30 19.3799 18.375 19.3799 10.5C19.3799 4.695 15.1611 0 9.94473 0ZM3.2053 10.5C3.2053 6.36 6.22456 3 9.94473 3C13.6649 3 16.6842 6.36 16.6842 10.5C16.6842 14.82 12.8023 21.285 9.94473 25.32C7.14113 21.315 3.2053 14.775 3.2053 10.5ZM6.57502 10.5C6.57502 8.42893 8.08369 6.75 9.94473 6.75C11.1486 6.75 12.2611 7.46475 12.863 8.625C13.4649 9.78525 13.4649 11.2147 12.863 12.375C12.2611 13.5353 11.1486 14.25 9.94473 14.25C8.08369 14.25 6.57502 12.5711 6.57502 10.5Z"
                    fill="#054468"
                  />
                </svg>
                {
                  address?
                  <p className="geo-text" dangerouslySetInnerHTML={{ __html: address }} /> : ""
                }
              </div>
              <div className="">
                <Link to="/objects-info" className="card-link">
                  {strings[lang]["objects-more"]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}