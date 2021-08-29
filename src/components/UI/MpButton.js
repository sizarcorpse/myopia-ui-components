import React from "react";
import Proptypes from "prop-types";

import { withStyles, Button, Link } from "@material-ui/core";

const MpButton = (props) => {
  const { children, varient, linkTo } = props;

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
  linkTo: Proptypes.string
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpButton);
