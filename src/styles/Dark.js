import { createMuiTheme } from "@material-ui/core/";

const light = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#7986cb",
      main: "#fff",
      dark: "#303f9f"
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162"
    }
  },
  typography: {
    fontFamily: '"Roboto"',
    h1: {
      fontFamily: '"Jost","sans-serif"',
      fontWeight: 700,
      lineHeight: 1.167,
      fontSize: "4.209rem"
    },
    h2: {
      fontFamily: '"Jost","sans-serif"',
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: "3.157rem"
    },
    h3: {
      fontFamily: "",
      fontWeight: 500,
      lineHeight: 1.167,
      fontSize: "2.369rem"
    },
    h4: {
      fontFamily: "",
      fontWeight: 500,
      lineHeight: 1.235,
      fontSize: "1.777rem"
    },
    h5: {
      fontFamily: "Alata",
      fontWeight: 700,
      lineHeight: 1.334,
      fontSize: "1.333rem"
    },
    h6: {},
    body1: {
      fontFamily: '"Poppins","Roboto"',
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: "1rem"
    },
    body2: {
      fontFamily: '"Poppins","Roboto"',
      fontWeight: 300,
      lineHeight: 1.7,
      fontSize: "0.875em"
    },
    subtitle1: {},
    subtitle2: {},
    button: {},
    caption: {},
    overline: {}
  }
});

light.overrides = {};

light.props = {};

export default light;
