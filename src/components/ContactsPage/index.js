import React from 'react';
import * as ReactRedux from "react-redux";
import * as Components from "..";

export const ContactsPage = () => {
    return (
      <div id="contacts-page" className="">
        <Components.Navbar />
        <Components.Header />
        <Components.Contacts />
        <Components.Footer />
      </div>
    );
};