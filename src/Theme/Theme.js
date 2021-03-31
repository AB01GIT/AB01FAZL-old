import { createMuiTheme } from "@material-ui/core/styles";
import { getDirection, getFont } from "./../Languages/getDirection";
import palette from "./palette";

const theme = createMuiTheme({
    palette: palette,
    direction: getDirection(),
    spacing: 2.5,
    typography: {
        h1: {
            fontFamily: "getFont()",
            // fontWeight:,
            // fontSize:,
            // lineHeight:
        },
        subtitle1: {
            fontFamily: getFont(),
            // fontWeight:,
            // fontSize:,
            // lineHeight:
        },
        body1: {
            fontFamily: getFont(),
            // fontWeight:,
            // fontSize:,
            // lineHeight:
        },
        // button: {},
    },
});

export default theme;
