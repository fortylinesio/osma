import React, { useState, useEffect } from 'react';
import * as ReactRedux from "react-redux";

import "./index.css";

export const ObjectsInfo = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);
    
    const [data, setData] = useState(null);

    const content_array = data?.[0]?.content?.rendered.split('\n\n\n\n');
    const info1 = content_array?.[1];
    const info2 = content_array?.[2];
    const fact = content_array?.[3];
    const table = content_array?.[4];
    

    useEffect(() => {
        fetch('https://osmagroup.000webhostapp.com/wp-json/wp/v2/building-objects')
        .then(res => res.json())
        .then(json => {
            setData(json)
        })
    }, []);

    return (
        <div id="objects-info" className="container">
            {
              fact?
              <h2 className="geo-text" dangerouslySetInnerHTML={{ __html: fact }} /> : ""
            }
            {/* <h2 className="col-10 d-flex justify-content-end"> {strings[lang]["fact"]} </h2> */}
            <div className="row row-cols facts-section">
                <div className="col fact-text">
                    {
                      info1?
                      <p className="geo-text" dangerouslySetInnerHTML={{ __html: info1 }} /> : ""
                    }
                    {
                      info2?
                      <p className="geo-text" dangerouslySetInnerHTML={{ __html: info2 }} /> : ""
                    }
                    {/* <p style={{ marginBottom: "40px" }}> {strings[lang]["fact-description-top"]} </p>
                    <h5> {strings[lang]["fact-title"]} </h5>
                    <p> {strings[lang]["fact-description-bottom"]} </p> */}
                </div>
                <div className="col fact-table">
                    {
                      table?
                      <p className="geo-text" dangerouslySetInnerHTML={{ __html: table }} /> : ""
                    }
                    {/* <table className="table">
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
                    </table> */}
                </div>
            </div>
        </div>
    );
}