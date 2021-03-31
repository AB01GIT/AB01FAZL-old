import React from "react";
import { Swipeable } from "react-swipeable";
import { withRouter } from "react-router-dom";
import FooterButton from "./../../FooterButton/FooterButton";

import "./circle.css";
import "./SkillsStyle.css";

const Skills = (props) => {
    return (
        <Swipeable
            className="SkiilsPageBase"
            onSwipedRight={() => props.history.goBack()}
        >
            <FooterButton />
            <p id="SKtitle">MY SKILLS</p>
            <div className="SKbody">
                <div className="SKsurfaceRow">
                    <div className="SKdivBox">
                        <div className="c100 p95">
                            <span>95%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>HTML / CSS</p>
                    </div>
                    <div className="SKdivBox">
                        <div className="c100 p95">
                            <span>95%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>BOOTSTRAP</p>
                    </div>
                    <div className="SKdivBox">
                        <div className="c100 p75">
                            <span>75%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>JavaScript</p>
                    </div>
                    <div className="SKdivBox">
                        <div className="c100 p85">
                            <span>85%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>REACT</p>
                    </div>
                    <div className="SKdivBox">
                        <div className="c100 p80">
                            <span>80%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>REDUX</p>
                    </div>
                    <div className="SKdivBox">
                        <div className="c100 p80">
                            <span>80%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>MATERIAL UI</p>
                    </div>
                </div>
                <div className="SKsurfaceRow">
                    <div className="SKdivBox">
                        <div className="c100 p80">
                            <span>80%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>C#</p>
                    </div>
                    <div className="SKdivBox">
                        <div className="c100 p85">
                            <span>85%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>ASP .NET Core</p>
                    </div>
                    <div className="SKdivBox">
                        <div className="c100 p85">
                            <span>85%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>UI/UX DESIGN</p>
                    </div>
                    <div className="SKdivBox">
                        <div className="c100 p90">
                            <span>90%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>WORDPRESS</p>
                    </div>
                    <div className="SKdivBox">
                        <div className="c100 p65">
                            <span>65%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>SQL Server</p>
                    </div>
                    <div className="SKdivBox">
                        <div className="c100 p65">
                            <span>65%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <p>Git</p>
                    </div>
                </div>
            </div>
        </Swipeable>
    );
};

export default withRouter(Skills);
