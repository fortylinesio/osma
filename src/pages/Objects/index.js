import React from 'react';
import * as ReactRedux from "react-redux";
import { Link } from 'react-router-dom';

import "./index.css";

export const Objects = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="objects-page" className="">
      <div id="objects" className="container">
        <div className="row row-cols-3 justify-content-center">
          <div className="col card">
            <img className="card-img-top" alt='card-top' />
            <div className="card-body">
              <h6 className="card-title">{strings[lang]["objects-title"]}</h6>
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
                <p className="geo-text">{strings[lang]["objects-address"]}</p>
              </div>
              <Link to="/object-info-page" className="card-link">
                {strings[lang]["objects-more"]}
              </Link>
            </div>
          </div>
          <div className="col card">
            <img className="card-img-top" alt='card-top' />
            <div className="card-body">
              <h6 className="card-title">{strings[lang]["objects-title"]}</h6>
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
                <p className="geo-text">{strings[lang]["objects-address"]}</p>
              </div>
              <Link to="/object-info-page" className="card-link">
                {strings[lang]["objects-more"]}
              </Link>
            </div>
          </div>
          <div className="col card">
            <img className="card-img-top" alt='card-top' />
            <div className="card-body">
              <h6 className="card-title">{strings[lang]["objects-title"]}</h6>
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
                <p className="geo-text">{strings[lang]["objects-address"]}</p>
              </div>
              <div className="">
                <Link to="/object-info-page" className="card-link">
                  {strings[lang]["objects-more"]}
                </Link>
                {/* <svg 
                          width="9" 
                          height="12" 
                          viewBox="0 0 9 12" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                            d="M0.894043 10.59L5.43351 6L0.894043 1.41L2.29156 0L8.23847 6L2.29156 12L0.894043 10.59Z" 
                            fill="#054468"
                        />
                      </svg> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}