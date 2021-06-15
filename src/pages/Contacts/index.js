import React from 'react';
import * as ReactRedux from "react-redux";
import "./index.css";
import emailjs from 'emailjs-com';

// import ym from 'react-yandex-metrika';
// ym('hit', '/contacts');

export const Contacts = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    function sendEmail(emailData) {
        emailData.preventDefault();

        emailjs.sendForm('service_8yf00lt', 'template_h9ua91n', emailData.target, 'user_izbso7sF6rKtph5nXyO0x')
            .then((result) => {
                console.log(result.text);
                if (!alert(result.text + '! ' + strings[lang]["career-sent-successful"]))
                    window.location.reload();
            }, (error) => {
                console.log(error.text);
                if (!alert(strings[lang]["career-sent-failed"] + '\n' + error.text))
                    window.location.reload();
            });
    }

    return (
        <div id="contacts-page" className="">
            <div id="contacts" className="container">
                <h2 className="col-10 d-flex justify-content-start"> {strings[lang]["contacts-title"]} </h2>
                <div className="row row-cols facts-section container">
                    <div className="col contacts-card">
                        <div className="card-inner">
                            <h4> {strings[lang]["contacts-our-address"]} </h4>
                            <div className="d-flex flex-row">
                                <svg
                                    className="contacts-icon"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11 0C5.195 0 0.5 4.695 0.5 10.5C0.5 18.375 11 30 11 30C11 30 21.5 18.375 21.5 10.5C21.5 4.695 16.805 0 11 0ZM3.5 10.5C3.5 6.36 6.86 3 11 3C15.14 3 18.5 6.36 18.5 10.5C18.5 14.82 14.18 21.285 11 25.32C7.88 21.315 3.5 14.775 3.5 10.5ZM7.25 10.5C7.25 8.42893 8.92893 6.75 11 6.75C12.3397 6.75 13.5777 7.46475 14.2476 8.625C14.9175 9.78525 14.9175 11.2147 14.2476 12.375C13.5777 13.5353 12.3397 14.25 11 14.25C8.92893 14.25 7.25 12.5711 7.25 10.5Z"
                                        fill="white"
                                    />
                                </svg>
                                <p> {strings[lang]["contacts-address"]} </p>
                            </div>
                            <div className="d-flex flex-row">
                                <svg
                                    className="contacts-icon"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2 0.5H7.25C8.075 0.5 8.75 1.175 8.75 2C8.75 3.875 9.05 5.675 9.605 7.355C9.77 7.88 9.65 8.465 9.23 8.885L5.93 12.185C8.09 16.43 11.57 19.895 15.815 22.07L19.115 18.77C19.415 18.485 19.79 18.335 20.18 18.335C20.33 18.335 20.495 18.35 20.645 18.41C22.325 18.965 24.14 19.265 26 19.265C26.825 19.265 27.5 19.94 27.5 20.765V26C27.5 26.825 26.825 27.5 26 27.5C11.915 27.5 0.5 16.085 0.5 2C0.5 1.175 1.175 0.5 2 0.5ZM5.81014 3.5C5.90014 4.835 6.12514 6.14 6.48514 7.385L4.68514 9.185C4.07014 7.385 3.68014 5.48 3.54514 3.5H5.81014ZM20.6001 21.53C21.8751 21.89 23.1801 22.115 24.5001 22.205V24.44C22.5201 24.305 20.6151 23.915 18.8001 23.315L20.6001 21.53Z"
                                        fill="white"/>
                                </svg>
                                <p> {strings[lang]["contacts-number"]} </p>
                            </div>
                            <div className="d-flex flex-row">
                                <svg
                                    className="contacts-icon"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 30 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M30 3C30 1.35 28.65 0 27 0H3C1.35 0 0 1.35 0 3V21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3ZM27 3L15 10.5L3 3H27ZM15 13.5L3 6V21H27V6L15 13.5Z"
                                        fill="white"/>
                                </svg>
                                <p> {strings[lang]["contacts-mail"]} </p>
                            </div>
                        </div>
                    </div>
                    <div className="col contacts-form">
                        <div className="d-flex flex-column">
                            <form className="contact-form" onSubmit={sendEmail}>
                                <h5> {strings[lang]["contacts-feedback"]} </h5>
                                <input type="text" name="user_name" placeholder={strings[lang]["contacts-name"]} required/>
                                <hr/>
                                <input type="text" name="user_phone" maxLength={20} placeholder={strings[lang]["contacts-phone"]} required/>
                                <hr/>
                                <input name="message" placeholder={strings[lang]["contacts-message"]} required/>
                                <hr/>
                                <button className="send-btn" type="submit">{strings[lang]["contacts-send"]}</button>
                            </form>
                        </div>
                    </div>
                </div>
                <iframe
                    className="container-fluid"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.224196036613!2d74.68996711542246!3d42.86811187915596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb1ba94f15655%3A0xf589781683fb1c0d!2sOsma%20Group!5e0!3m2!1sru!2skg!4v1620743144037!5m2!1sru!2skg"
                    height="450"
                    loading="lazy"
                    title="map">
                </iframe>
            </div>
        </div>
    );
}