import { createTheme } from "@material-ui/core/";

const light = createTheme({
  palette: {
    type: "light",
    primary: {
      light: "#ffffff",
      main: "#2d3663",
      dark: "#EDF1F6"
    },
    secondary: {
      light: "#ff4081",
      main: "#0383c7",
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
      fontFamily: '"Alata","sans-serif"',
      fontWeight: 600,
      lineHeight: 1.167,
      fontSize: "2.369rem"
    },
    h4: {
      fontFamily: '"Poppins","Roboto"',
      fontWeight: 600,
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
    button: {
      fontFamily: '"Poppins","Roboto"',
      fontSize: "0.875em",
      lineHeight: 1.7,
      fontWeight: 400
    },
    caption: {},
    overline: {}
  }
});

light.shape = {
  borderRadius: 5
};

light.overrides = {
  MuiButton: {
    root: {
      textTransform: "none",
      margin: light.spacing(1, 0)
    },
    containedPrimary: {
      backgroundColor: light.palette.secondary.main,
      padding: light.spacing(1.5, 2),
      "&:hover": {
        backgroundColor: "#396dab"
      }
    },
    containedSecondary: {
      backgroundColor: light.palette.primary.main,
      padding: light.spacing(1.5, 2),
      "&:hover": {
        backgroundColor: "#396dab"
      }
    }
  },

  MuiInputLabel: {
    root: {
      top: 0,
      color: light.palette.primary.main,
      fontSize: light.typography.body1.fontSize,
      "&$focused": {
        color: light.palette.secondary.main
      }
    },
    outlined: {
      transform: "translate(14px, 14px) scale(1)"
    }
  },
  MuiOutlinedInput: {
    root: {
      maxHeight: 44,
      "& fieldset": {
        borderColor: light.palette.primary.main
      },
      "&:hover": {
        "& fieldset.MuiOutlinedInput-notchedOutline": {
          borderColor: light.palette.secondary.main
        }
      },
      "&$focused": {
        "& fieldset.MuiOutlinedInput-notchedOutline": {
          borderColor: light.palette.secondary.main
        }
      }
    }
  },
  MuiSelect: {
    select: {
      "&:focus": {
        backgroundColor: "none"
      }
    }
  }
};

light.props = {};

export default light;
