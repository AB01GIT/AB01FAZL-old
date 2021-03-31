import React from "react";
import "./404style.css";
import { Link } from "react-router-dom";

const P404 = () => {
    return (
        <div id="p404div">
            <p className="p404p" id="p404id1">
                404
            </p>
            <p className="p404p" id="p404id2">
                Page Not Found
            </p>
            <Link to="/" className="p404p">
                <p id="p404id3">back Home</p>
            </Link>
        </div>
    );
};

export default P404;
