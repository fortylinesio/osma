import React from 'react';
import * as ReactRedux from "react-redux";
// import * as Components from "../../components";
import "./index.css";

export const Contacts = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    return (
        <div id="contacts" className="container">
            <h2 className="col-10 d-flex justify-content-end"> {strings[lang]["fact"]} </h2>
            <div className="row row-cols facts-section">
                <div className="col fact-text">
                    <p> {strings[lang]["fact-description-top"]} </p>
                    <h5> {strings[lang]["fact-title"]} </h5>
                    <p> {strings[lang]["fact-description-bottom"]} </p>
                </div>
                <div className="col fact-table">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="td"><b> {strings[lang]["city"]} </b></td>
                                <td> {strings[lang]["city-name"]} </td>
                            </tr>
                            <tr>
                                <td className="td"><b> {strings[lang]["beginning"]} </b></td>
                                <td> {strings[lang]["beginning-date"]} </td>
                            </tr>
                            <tr>
                                <td className="td"><b> {strings[lang]["handing"]} </b></td>
                                <td> {strings[lang]["handing-date"]} </td>
                            </tr>
                            <tr>
                                <td className="td"><b> {strings[lang]["status"]} </b></td>
                                <td> {strings[lang]["status-name"]} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.237184428587!2d74.58929301485102!3d42.867837710876266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec828746e60af%3A0xbdd8b2ff7bf4ab58!2z0JHQvtC60L7QvdCx0LDQtdCy0LAsIDE0NSwgMTQ1INCR06nQutOp0L3QsdCw0LXQsiDQutOp0YfTqdGB0q8sINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1617173143280!5m2!1sru!2skg" 
                width="600" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">                    
            </iframe> */}
        </div>
    );
}