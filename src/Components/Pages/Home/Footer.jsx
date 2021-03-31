import React, { Fragment, useEffect } from "react";
import { changeLanguage, lang } from "../../../Languages/getDirection";

const Footer = (prop) => {
    useEffect(() => {
        setTimeout(() => {
            prop.setState(false);
        }, 17000);
    });
    return prop.state ? null : (
        <Fragment>
            <div className="languageBox fade-in" dir="ltr">
                <span
                    className="langCursor"
                    onClick={() => changeLanguage("fa")}
                    style={{
                        fontWeight: lang === "fa" ? "700" : "300",
                    }}
                >
                    فارسی
                </span>
                <span> / </span>
                <span
                    className="langCursor"
                    onClick={() => changeLanguage("en")}
                    style={{
                        fontWeight: lang === "en" ? "700" : "300",
                    }}
                >
                    English
                </span>
            </div>
            <div className="copyRight fade-in" dir="ltr">
                <span>
                    AB01FAZL &copy; 20<span id="id20">20</span>
                </span>
            </div>
        </Fragment>
    );
};

export default Footer;

{
    /* <button onClick={() => changeLanguage("fa")}>فارسی</button>
            <button onClick={() => changeLanguage("en")}>English</button> */
}
