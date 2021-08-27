import React from "react";

import { withStyles, Box } from "@material-ui/core";
const GCard = (props) => {
  const {} = props;
  return <Box> Hi This is sample page </Box>;
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(GCard);
