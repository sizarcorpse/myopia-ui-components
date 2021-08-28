import React from "react";

import { withStyles, Button, Link } from "@material-ui/core";

const MpButton = (props) => {
  const { children, varient, linkTo } = props;

  return (
    <Link href={linkTo ? `${linkTo}` : "#"} underline="none">
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

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpButton);
