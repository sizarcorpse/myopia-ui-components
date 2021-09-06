import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles, Button } from "@material-ui/core";

const MpButton = (props) => {
  const { children, varient, linkTo, type } = props;

  return (
    <Link to={linkTo} style={{ textDecoration: "none" }}>
      <Button
        variant={varient === "primary" ? "contained" : "contained"}
        color={
          varient === "primary"
            ? "primary"
            : varient === "secondary"
            ? "secondary"
            : "primary"
        }
        type={type === "submit" ? "submit" : ""}
      >
        {children}
      </Button>
    </Link>
  );
};
MpButton.defaultProps = {
  linkTo: "#"
};

MpButton.propTypes = {
  children: Proptypes.node.isRequired,
  varient: Proptypes.oneOf(["primary", "secondary"]),
  linkTo: Proptypes.string,
  type: Proptypes.oneOf(["submit"])
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpButton);
