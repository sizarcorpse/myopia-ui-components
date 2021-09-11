import React from "react";

//Componetns
import OnlineImagingHeader from "../components/sections/OnlineImaging/OnlineImaging_Header";
import OnlineImagingIntroduction from "../components/sections/OnlineImaging/OnlineImaging_Introduction";
import OnlineImagingFaq from "../components/sections/OnlineImaging/OnlineImaging_Faq";

import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const OnlineImagingPage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12}>
        <Box>
          <OnlineImagingHeader />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <OnlineImagingIntroduction />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#EDF1F6" }}>
        <Container maxWidth="sm">
          <Box>
            <OnlineImagingFaq />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(OnlineImagingPage);
