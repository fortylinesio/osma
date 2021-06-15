import React from 'react';
import * as ReactRedux from "react-redux";
import "./index.css";
import emailjs from 'emailjs-com';

// import ym from 'react-yandex-metrika';
// ym('hit', '/career');

export const Career = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    function sendEmail(emailData) {
        emailData.preventDefault();

        emailjs.sendForm('service_8yf00lt', 'template_8fmz5s4', emailData.target, 'user_izbso7sF6rKtph5nXyO0x')
            .then((result) => {
                console.log(result.text);
                if (!alert(result.text + '! ' + strings[lang]["career-sent-successful"]))
                    window.location.reload();
            }, (error) => {
                console.log(error.text);
                alert(strings[lang]["career-sent-failed"] + '\n' + error.text)
            });
    }

    return (
        <div id="career-page" className="">
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
                            {/*<form className="contact-form" encType="multipart/form-data" method="post" onSubmit={sendEmail}>*/}
                            <form className="contact-form" method="post" onSubmit={sendEmail}>
                                <p> {strings[lang]["career-forms-description"]} </p>
                                <input type="text" name="user_name" placeholder={strings[lang]["career-name"]}
                                       required/>
                                <hr/>
                                <input type="email" name="user_email" placeholder={strings[lang]["career-mail"]}
                                       required/>
                                <hr/>
                                <input type="text" name="user_phone" maxLength={20}
                                       placeholder={strings[lang]["career-phone"]} required/>
                                <hr/>
                                <br/>
                                <label>{strings[lang]["career-file-upload-warning"]}:</label>
                                <br/>
                                <input type="file" name="my_file" required/>
                                <button className="send-btn" type="submit"> {strings[lang]["career-send"]} </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}