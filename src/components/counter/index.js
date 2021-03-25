import React from "react";
import * as ReactRedux from "react-redux";
import "./index.css";

export const Counter = () => {
  return (
    <div id="counter" className="container">
      <div className="row">
        <div className="col-4">
          <p>1000+</p>
        </div>
        <div className="col-4">
          <p>2500+</p>
        </div>
        <div className="col-4">
          <p>200</p>
        </div>
      </div>
    </div>
  );
};
