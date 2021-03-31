import React from "react";
import { FormattedMessage } from "react-intl";
import { Swipeable } from "react-swipeable";
import { withRouter } from "react-router-dom";
import FooterButton from "./../../FooterButton/FooterButton";
import { lang } from "../../../Languages/getDirection";

import "./imgStyle.scss";
import "./meStyle.css";

const Me = (props) => {
    return (
        <Swipeable
            className="MePageBase"
            onSwipedRight={() => props.history.goBack()}
        >
            <FooterButton />
            <div
                className="MEpicDiv"
                style={{
                    marginRight: lang === "fa" ? "-260px" : null,
                }}
            >
                <div
                    className="glitch"
                    style={{
                        width: lang === "fa" ? "520px" : null,
                        height: lang === "fa" ? "520px" : null,
                    }}
                >
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                    <div className="glitch__item"></div>
                </div>
            </div>
            <div className="context">
                <h1>
                    HI THERE ! <span id="MEtitleSpanID"> I'M ABOLFAZL</span>
                </h1>
                <p id="MEptag">
                    <a href="https://www.ab01fazl.ir" className="btn">
                        <span className="text">Text</span>
                        <span className="flip-front">Resume</span>
                        <span className="flip-back">Download</span>
                    </a>
                    <FormattedMessage id="ME.text1" />
                    <br />
                    <p className="me_about_txt2_3">
                        <FormattedMessage id="ME.text2" />
                    </p>
                    <p className="me_about_txt2_3">
                        <FormattedMessage id="ME.text3" />
                    </p>
                </p>
            </div>
            <div className="area" dir="ltr">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </Swipeable>
    );
};

export default withRouter(Me);
