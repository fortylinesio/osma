import React from 'react';
import * as ReactRedux from "react-redux";
// import * as Components from "../../components";
import "./index.css";

export const ObjectsInfo = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    return (
        <div id="objects-info" className="container">
            <h2 className="col-10 d-flex justify-content-end"> {strings[lang]["fact"]} </h2>
            <div className="row row-cols facts-section">
                <div className="col fact-text">
                    <p style={{marginBottom: "40px"}}> {strings[lang]["fact-description-top"]} </p>
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
        </div>
    );
}