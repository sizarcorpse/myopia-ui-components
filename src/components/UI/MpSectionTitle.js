import React from "react";

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
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
        textAlign: "center"
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
  const {} = props;

  const localClasses = useStyles();

  return (
    <Box className={localClasses.root}>
      <Box className={localClasses.sectionTitleMotto}>
        <Typography variant="body1">WE ARE</Typography>
      </Box>
      <Box
        className={localClasses.sectionTitle}
        marginTop={{ xs: "-3.5em", sm: "-4em", md: "-4.5em", lg: "-5em" }}
      >
        <Typography variant="h2" color="primary">
          Locally Owned and Operated.
        </Typography>
      </Box>
    </Box>
  );
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpSectionTitle);
