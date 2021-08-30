import React from "react";
import PropTypes from "prop-types";

import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  Link
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flexFlow: 1,
    alignItems: "center",
    gap: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1)
    },
    [theme.breakpoints.down("sm")]: {
      width: "9.9rem",
      height: "9.375rem",
      padding: theme.spacing(3),
      margin: theme.spacing(1.5)
    },
    "& p": {
      width: "15ch",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.85rem"
      }
    },

    "& img": {
      [theme.breakpoints.down("sm")]: {
        width: 45
      }
    }
  }
}));
const MpIconText = (props) => {
  const { icon, title } = props;
  const localClasses = useStyles();
  return (
    <Box className={localClasses.root}>
      <img alt="" src={icon} />
      <Link href="" underline="none">
        <Typography variant="body1">{title}</Typography>
      </Link>
    </Box>
  );
};

MpIconText.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpIconText);
