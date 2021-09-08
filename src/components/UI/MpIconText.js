import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: (props) =>
      props.size === "small" ? theme.spacing(3) : theme.spacing(4),
    margin: (props) =>
      props.size === "small" ? theme.spacing(1.5) : theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flexFlow: 1,
    alignItems: "center",
    gap: theme.spacing(2.5),
    width: (props) => (props.size === "small" ? "9.9rem" : "auto"),
    height: (props) => (props.size === "small" ? "9.375rem" : "auto"),
    borderRadius: theme.shape.borderRadius,
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",

    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1),
      justifyContent: "center",
      height: "15.625rem !important",
      width: "100% !important"
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
      fontSize: (props) => (props.size === "small" ? "0.85rem" : "auto"),
      [theme.breakpoints.down("xs")]: {
        width: "23ch",
        fontSize: "1rem !important"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.85rem"
      },
      "& a": {
        textDecoration: "none",
        color: theme.palette.primary.main
      }
    },

    "& img": {
      width: (props) => (props.size === "small" ? 45 : "auto"),
      [theme.breakpoints.down("xs")]: {
        width: "75px !important"
      },
      [theme.breakpoints.down("sm")]: {
        width: 45
      }
    }
  }
}));

const MpIconText = (props) => {
  const {
    item: { icon, title },
    size
  } = props;
  const localClasses = useStyles({ size });
  return (
    <Box className={localClasses.root}>
      <img alt="" src={icon} />

      <Typography variant="body1" color="primary">
        <Link to="/services/service" underline="none">
          {title}{" "}
        </Link>
      </Typography>
    </Box>
  );
};

MpIconText.propTypes = {
  // item: PropTypes.exact({
  //   icon: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired
  // }),
  size: PropTypes.string
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpIconText);
