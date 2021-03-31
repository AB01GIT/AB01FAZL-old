import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Title from "./Title";
import MenuBtns from "./MenuBtns";
import Footer from "./Footer";
import "./homeStyle.css";
import "./btn1Style.css";
import "./btnStyle.scss";

function Home() {
    const [status, setStatus] = useState(true);

    useEffect(() => {
        var now = new Date().getTime();
        var setupTime = localStorage.getItem("FirstVisit");
        var FirstTime = false;
        if (now - setupTime > 4 * 60 * 1000) {
            FirstTime = true;
        }

        if (setupTime == null) {
            localStorage.setItem("FirstVisit", now);
            console.log("Set FirstVisit");
        } else {
            if (FirstTime === false) {
                setStatus(false);
            }

            if (now - setupTime > 60 * 1000) {
                console.log("Clear FirstVisit");
                localStorage.clear();
            }
        }
    }, []);

    const changeStatus = () => {
        setStatus(false);
    };

    const size = window.innerWidth;
    if (size > 500) {
        return (
            <div className="HomePageBase" onLoad={() => changeStatus()}>
                <Helmet>
                    <script src="https://ab01fazl.ir/script/CDNjs1.js"></script>
                    <script src="https://ab01fazl.ir/script/CDNjs2.js"></script>
                    <script src="https://ab01fazl.ir/script/CDNjs3.js"></script>
                </Helmet>
                <div
                    className="homeDiveClass baseDiv"
                    onClick={() => changeStatus()}
                >
                    <div className="content">
                        <div id="large-header" className="large-header">
                            <canvas id="homeCanavsID"></canvas>
                            <Title state={status} setState={setStatus} />
                        </div>
                    </div>
                    <MenuBtns state={status} setState={setStatus} />
                    <Footer state={status} setState={setStatus} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="HomePageBase">
                <div
                    className="homeDiveClass baseDiv"
                    onClick={() => changeStatus()}
                >
                    <div className="content">
                        <div id="large-header" className="large-header">
                            <canvas id="homeCanavsID"></canvas>
                            <Title state={status} setState={setStatus} />
                        </div>
                    </div>
                    <MenuBtns state={status} setState={setStatus} />
                    <Footer state={status} setState={setStatus} />
                </div>
            </div>
        );
    }
}

export default Home;
