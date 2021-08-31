import React from "react";
import PropTypes from "prop-types";

import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: theme.spacing(2.5),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row"
    },
    "& img": {
      width: 75,
      height: 75,
      [theme.breakpoints.down("xs")]: {
        width: 50,
        height: 50
      }
    }
  },
  iconContent: {
    "& h5": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.2rem"
      }
    },

    "& p": {
      marginTop: theme.spacing(1),
      [theme.breakpoints.up("md")]: {
        maxWidth: "43ch"
      }
    }
  }
}));
const MpIconBox = (props) => {
  const { item } = props;
  const localClasses = useStyles();
  return (
    <Box className={localClasses.root}>
      <img alt="hi" src={item.icon} />
      <Box className={localClasses.iconContent}>
        <Typography variant="h5" color="primary">
          {item.title}
        </Typography>
        <Typography variant="body1" color="primary">
          {item.description}
        </Typography>
      </Box>
    </Box>
  );
};

MpIconBox.propTypes = {
  item: PropTypes.exact({
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  })
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpIconBox);