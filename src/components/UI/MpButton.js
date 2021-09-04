import React from "react";
import Proptypes from "prop-types";

import { withStyles, Button, Link } from "@material-ui/core";

const MpButton = (props) => {
  const { children, varient, linkTo, type } = props;

  return (
    <Link href={linkTo} underline="none">
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
