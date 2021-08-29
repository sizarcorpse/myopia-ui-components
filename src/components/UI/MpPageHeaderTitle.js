import React from "react";
import Proptypes from "prop-types";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  headerTitle: {
    margin: theme.spacing(2.5, 0),

    "& h1": {
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
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
  headerInfo: {
    margin: theme.spacing(2.5, 0),
    "& p": {
      color: "#fff",
      maxWidth: "75ch"
    }
  }
}));

const MpPageHeaderTitle = (props) => {
  const { children, title } = props;

  const localClasses = useStyles();

  return (
    <Box className={localClasses.root}>
      <Box className={localClasses.headerTitle}>
        <Typography variant="h1"> {title}</Typography>
      </Box>
      <Box className={localClasses.headerInfo}>
        <Typography variant="body1">{children}</Typography>
      </Box>
    </Box>
  );
};

MpPageHeaderTitle.protoTypes = {
  children: Proptypes.node.isRequired,
  title: Proptypes.string.isRequired
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpPageHeaderTitle);
