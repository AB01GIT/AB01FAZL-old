import React from "react";
import { Route, Switch } from "react-router";
import { IntlProvider } from "react-intl";
import { getDirection, lang } from "./Languages/getDirection";
import {
    ThemeProvider,
    StylesProvider,
    CssBaseline,
    jssPreset,
} from "@material-ui/core";
import Home from "./Components/Pages/Home/Home";
import Skills from "./Components/Pages/Skills/skills";
import Contact from "./Components/Pages/Contact/Contact";
import selectedLan from "./Languages";
import theme from "./Theme/Theme";
import { create } from "jss";
import rtl from "jss-rtl";
import Me from "./Components/Pages/ME/ME";
import P404 from "./Components/Pages/404/404";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
function App() {
    return getDirection() === "ltr" ? (
        <ThemeProvider theme={theme}>
            <StylesProvider>
                <CssBaseline>
                    <IntlProvider locale={lang} messages={selectedLan[lang]}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/me" component={Me} />
                            <Route path="/skills" component={Skills} />
                            <Route path="/contact" component={Contact} />
                            {/* <Route component={P404} /> */}
                            <Route path="*" exact component={P404} />
                        </Switch>
                    </IntlProvider>
                </CssBaseline>
            </StylesProvider>
        </ThemeProvider>
    ) : (
        <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
                <CssBaseline>
                    <IntlProvider locale={lang} messages={selectedLan[lang]}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/me" component={Me} />
                            <Route path="/skills" component={Skills} />
                            <Route path="/contact" component={Contact} />
                            <Route path="*" exact component={P404} />
                        </Switch>
                    </IntlProvider>
                </CssBaseline>
            </StylesProvider>
        </ThemeProvider>
    );
}

export default App;
