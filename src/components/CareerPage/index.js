import React from 'react';
import * as ReactRedux from "react-redux";
import * as Components from "..";

export const CareerPage = () => {
    return (
      <div id="career-page" className="">
        <Components.Navbar />
        <Components.Header />
        <Components.Career />
        <Components.Footer />
      </div>
    );
};