import React from "react";
import Proptypes from "prop-types";
import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  Hidden
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  headerTitle: {
    margin: theme.spacing(2.5, 0),

    "& h1": {
      color: "#fff",
      [theme.breakpoints.down("xs")]: {
        fontFamily: '"Poppins","sans-serif"',
        fontSize: "4rem",
        textAlign: "center !important",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: 3,
        color: "#D7DAE5"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.5rem",
        lineHeight: 1.2
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "3.2rem",
        lineHeight: 1.1
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.7rem",
        lineHeight: 1
      }
    }
  },
  motto: {
    "& h2": {
      textAlign: (props) => (props.align ? props.align : "left"),
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
        textAlign: "center !important"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.35rem"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.7rem"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3rem"
      }
    }
  },
  headerInfo: {
    margin: theme.spacing(2.5, 0),
    "& p": {
      color: "#fff",
      maxWidth: "75ch",
      [theme.breakpoints.down("xs")]: {
        color: theme.palette.primary.main,
        textAlign: "center"
      }
    }
  }
}));

const MpHeroTitle = (props) => {
  const { children, title, motto } = props;

  const localClasses = useStyles();

  return (
    <Box className={localClasses.root}>
      <Box className={localClasses.headerTitle}>
        <Typography variant="h1"> {title}</Typography>
      </Box>
      <Hidden smUp>
        <Box className={localClasses.motto} marginTop={{ xs: "-3.2rem" }}>
          <Typography variant="h2" color="primary">
            {motto}
          </Typography>
        </Box>
      </Hidden>

      <Box className={localClasses.headerInfo}>
        <Typography variant="body1">{children}</Typography>
      </Box>
    </Box>
  );
};

// MpHeroTitle.protoTypes = {
//   children: Proptypes.node.isRequired,
//   title: Proptypes.string.isRequired
// };

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpHeroTitle);
