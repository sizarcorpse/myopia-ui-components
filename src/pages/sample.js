import React from "react";

import { withStyles, Box } from "@material-ui/core";
const GCard = (props) => {
  const {} = props;
  return <Box> Hi </Box>;
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(GCard);
