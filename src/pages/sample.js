import React from "react";

//UI
import MpButton from "../components/MpButton";
import MpPageHeaderTitle from "../components/MpPageHeaderTitle";

//Componetns
import MpPageHeader from "../components/MpPageHeader";

import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const GCard = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <Grid item xs={12}>
        <CssBaseline />
        <Box>
          <MpPageHeader />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(GCard);
