import React from "react";
import * as ReactRedux from "react-redux";
import * as Components from "..";
import logo from "./logo.png";
import "./index.css";

export const Footer = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    return (
        <div id="footer">
            <footer className="text-center text-lg-start">
                <div className="container p-4">
                    <div className="row text-left">
                        <div className="col-lg-1  mb-4 mb-md-0">
                            <img src={logo} width="50px" height="65px" alt="Logo"/>
                        </div>

                        <div className="col-lg-3  mb-4 mb-md-0 footer-columns-1">
                            <h6 className="">{strings[lang]["footer-fast-links"]}</h6>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#aboutUs"
                                       className="text-light underline">{strings[lang]["footer-about-us"]}</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light underline">
                                        {strings[lang]["footer-services"]}
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light underline">
                                        {strings[lang]["footer-objects"]}
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light underline">
                                        {strings[lang]["footer-news"]}
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light underline">
                                        {strings[lang]["footer-careers"]}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4  mb-4 mb-md-0 footer-columns-2">
                            <h6 className="">{strings[lang]["footer-contacts"]}</h6>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#" className="text-light underline">
                                        {strings[lang]["footer-city"]}
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light underline">
                                        {strings[lang]["footer-street"]}
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:osma.groupkg@gmail.com" className="text-light underline">
                                        {strings[lang]["footer-mail"]}
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light underline">
                                        {strings[lang]["footer-phone"]}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4  mb-4 mb-md-0 footer-columns-3">
                            <ul className="list-unstyled">
                                <li>
                                    <p href="#!" className="text-light">
                                        {strings[lang]["footer-schedule"]}
                                    </p>
                                </li>
                                <li>
                                    <p href="#!" className="text-light">
                                        {strings[lang]["footer-contact-us"]}
                                    </p>
                                </li>
                                <li>
                                    <Components.SocialIcons/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3">
                    <div className="d-flex justify-content-end">
                        <div style={{marginRight: 15, marginTop: 25, color: "grey"}}></div>
                        <div style={{marginTop: 25}}></div>
                    </div>
                    <a href="#" className="text-light underline" style={{color: "grey"}}>
                        {strings[lang]["footer-copyright"]}
                    </a>
                    <a
                        className="text-light underline"
                        style={{color: "grey"}}
                        href="https://fortylines.io/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {strings[lang]["footer-fortylines"]}
                    </a>
                </div>
            </footer>
        </div>
    );
};
