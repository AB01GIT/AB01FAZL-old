import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

const Title = (prop) => {
    useEffect(() => {
        setTimeout(() => {
            prop.setState(false);
        }, 16000);
    });

    return prop.state ? (
        <span className="main-title" dir="ltr">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1000)
                        .typeString("AB<strong>01</strong>FAZL")
                        .pauseFor(3000)
                        .deleteChars(6)
                        .typeString("<strong>OL</strong>FAZL")
                        .pauseFor(3000)
                        .deleteChars(6)
                        .typeString("<strong>01</strong>FAZL")
                        .pauseFor(5000)
                        .start();
                }}
            />
        </span>
    ) : (
        <span className="main-title" style={{ top: "10%" }}>
            AB
            <span className="thin">01</span>
            FAZL
        </span>
    );
};

export default Title;
