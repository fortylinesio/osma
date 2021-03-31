import React from 'react';
import * as ReactRedux from "react-redux";
// import * as Components from "../../components";
import "./index.css";

export const Career = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    return (
        <div id="career" className="container">
            <h3 className="col-10 d-flex justify-content-start"> {strings[lang]["career-title"]} </h3>
            <div className="row row-cols facts-section container">
                <div className="col container-fluid">
                    <div className="career-card">
                        <div className="card-inner">
                            <p> {strings[lang]["career-description"]} </p>
                        </div>
                    </div>
                </div>
                <div className="col career-form">
                    <div className="d-flex flex-column">
                        <p> {strings[lang]["career-forms-description"]} </p>
                        <input placeholder="Ваше имя *" required></input>
                        <hr />
                        <input placeholder="Ваш E-Mail *" required></input>
                        <hr />
                        <input placeholder="Номер телефона *" required></input>
                        <hr />
                        <input type="file" name="file"></input>     
                        <button className="send-btn"> {strings[lang]["career-send"]} </button>               
                    </div>
                </div>
            </div>
        </div>
    );
}