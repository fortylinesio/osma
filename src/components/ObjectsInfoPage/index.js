import React from 'react';
import * as ReactRedux from "react-redux";
import * as Components from "..";

export const ObjectsInfoPage = () => {
    return (
      <div id="object-info-page" className="">
        <Components.Navbar />
        {/* <Components.Header /> */}
        <Components.ObjectsInfo />
        <Components.Footer />
      </div>
    );
};