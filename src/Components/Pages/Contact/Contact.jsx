import React from "react";
import { Swipeable } from "react-swipeable";
import { withRouter } from "react-router-dom";
import FooterButton from "./../../FooterButton/FooterButton";
import "./CONstyle.css";

const Contact = (props) => {
    return (
        <Swipeable
            className="ContactPageBase"
            onSwipedRight={() => props.history.goBack()}
        >
            <FooterButton />
            <div className="CONbaseDIV" dir="ltr">
                <a
                    className="CONa"
                    href="https://www.instagram.com/gerahambe1/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="CONdivBox CONb1">
                        <i
                            className="CONicon fa fa-instagram"
                            aria-hidden="true"
                        ></i>
                        <p className="CONptags">INSTAGRAM</p>
                        <p className="CONptags2">@gerahambe1</p>
                    </div>
                </a>
                <a
                    className="CONa"
                    href="mailto:mail@ab01fazl.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="CONdivBox CONb2">
                        <i
                            className="CONicon fa fa-envelope-o"
                            aria-hidden="true"
                        ></i>
                        <p className="CONptags">@MAIL</p>
                        <p className="CONptags2">mail@ab01fazl.ir</p>
                    </div>
                </a>
                <a
                    className="CONa"
                    href="https://t.me/AB01FAZL"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="CONdivBox CONb3">
                        <i
                            className="CONicon fa fa-telegram"
                            aria-hidden="true"
                        ></i>
                        <p className="CONptags">TELEGRAM</p>
                        <p className="CONptags2">@AB01FAZL</p>
                    </div>
                </a>
                <a
                    className="CONa"
                    href="tel:+98938-450-6455"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="CONdivBox CONb4">
                        <i
                            className="CONicon fa fa-phone"
                            aria-hidden="true"
                        ></i>
                        <p className="CONptags">PHONE</p>
                        <p className="CONptags2">+98 938 450 6455</p>
                    </div>
                </a>
                <a
                    className="CONa"
                    href="https://steamcommunity.com/id/ab01fazl/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="CONdivBox CONb5">
                        <i
                            className="CONicon fa fa-steam-square"
                            aria-hidden="true"
                        ></i>
                        <p className="CONptags">STEAM :)</p>
                        <p className="CONptags2">AB01FAZL</p>
                    </div>
                </a>
            </div>
        </Swipeable>
    );
};

export default withRouter(Contact);
