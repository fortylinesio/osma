import React from 'react';
import * as ReactRedux from "react-redux";
import * as Components from "../../components";

export const ObjectsPage = () => {
    return (
      <div id="objects-page" className="">
        <Components.Navbar />
        <Components.Header />
        <Components.Objects />
        <Components.Footer />
      </div>
    );
};