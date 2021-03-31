import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { getDirection } from "./Languages/getDirection";
import App from "./App";
import "./Static/CSS/style.css";

document.getElementsByTagName("body")[0].setAttribute("dir", getDirection());

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
