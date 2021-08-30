import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  sectionTitleMotto: {
    "& p": {
      fontFamily: '"Poppins","sans-serif"',
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: "7.5rem",
      letterSpacing: 3,
      color: theme.palette.primary.dark,
      textAlign: (props) => (props.align ? props.align : "left"),
      [theme.breakpoints.down("xs")]: {
        fontSize: "4rem",
        textAlign: "center"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "5rem"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "6rem"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "7rem"
      }
    }
  },
  sectionTitle: {
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
  }
}));

const MpSectionTitle = (props) => {
  const { motto, title, align } = props;

  const localClasses = useStyles({ align });

  return (
    <Box className={localClasses.root}>
      <Box className={localClasses.sectionTitleMotto}>
        <Typography variant="body1">{motto}</Typography>
      </Box>
      <Box
        className={localClasses.sectionTitle}
        marginTop={{ xs: "-2rem", sm: "-2.5rem", md: "-3rem", lg: "-3.5rem" }}
      >
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

MpSectionTitle.propTypes = {
  motto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center", "right"])
};
export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpSectionTitle);
