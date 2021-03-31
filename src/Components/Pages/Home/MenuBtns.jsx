import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const MenuBtns = (prop) => {
    useEffect(() => {
        setTimeout(() => {
            prop.setState(false);
        }, 17000);
    });

    return prop.state ? null : (
        <div className="btnBox fade-in" dir="ltr">
            <Link to="/me" className="box-wrapper btn1">
                <div className="box">
                    <span>
                        <FormattedMessage id="menu.me" />
                    </span>
                </div>
            </Link>
            <Link to="/skills" className="box-wrapper btn2">
                <div className="box">
                    <span>
                        <FormattedMessage id="menu.skills" />
                    </span>
                </div>
            </Link>
            <Link to="/contact" className="box-wrapper btn3">
                <div className="box">
                    <span>
                        <FormattedMessage id="menu.contact" />
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default MenuBtns;
