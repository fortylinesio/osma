import React from 'react';
import * as ReactRedux from "react-redux";

import "./index.css";

export const AboutUs = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    return (
        <div id="about-us">
            <div className="container-fluid">
                <div className="row">
                    <div className="col about-us-area">
                        <div className="container">
                            <div className="about-us-title">{strings[lang]["about-us-title"]}</div>
                            <div className="about-us-name">{strings[lang]["about-us-name"]}</div>
                            <div className="about-us-description">{strings[lang]["about-us-description"]}</div>
                        </div>
                    </div>
                    <div className="col-lg-7 bg-image" />
                </div>
            </div>
        </div>
    );

}
