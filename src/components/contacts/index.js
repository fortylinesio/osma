import React from 'react';
import * as ReactRedux from "react-redux";
// import * as Components from "../../components";
import "./index.css";

export const Contacts = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    return (
        <div id="contacts" className="container">
            <h3 className="col-10 d-flex justify-content-start"> {strings[lang]["contacts-title"]} </h3>
            <div className="row row-cols facts-section container">
                <div className="col container-fluid">
                    <div className="contacts-card">
                        <div className="card-inner">
                            <p> {strings[lang]["contacts-our-address"]} </p>
                            <p> {strings[lang]["contacts-address"]} </p>
                            <p> {strings[lang]["contacts-number"]} </p>
                            <p> {strings[lang]["contacts-mail"]} </p>
                        </div>
                    </div>
                </div>
                <div className="col contacts-form">
                    <div className="d-flex flex-column">
                        <p> {strings[lang]["contacts-feedback"]} </p>
                        <input placeholder={strings[lang]["contacts-name"]} required></input>
                        <hr />
                        <input placeholder={strings[lang]["contacts-phone"]} required></input>
                        <hr />
                        <input placeholder={strings[lang]["contacts-message"]} required></input>
                        <hr />
                        <input type="file" name="file"></input>     
                        <button className="send-btn">{strings[lang]["contacts-send"]}</button>               
                    </div>
                </div>
            </div>
        </div>
    );
}