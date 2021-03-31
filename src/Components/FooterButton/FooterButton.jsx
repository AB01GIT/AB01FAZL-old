import React from "react";
import "./fbStyle.css";
import { Link } from "react-router-dom";
const FooterButton = () => {
    return (
        <Link to="/">
            <div id="backBTN" className="fade-in2">
                <p id="pBACK">OK , Back</p>
            </div>
        </Link>
    );
};

export default FooterButton;
