import React from "react";

import MpTestimonial from "../components/UI/MpTestimonial";
//Componetns
import MpPageHeader from "../components/sections/MpPageHeader";
import MpIntroduction from "../components/sections/MpIntroduction";
import MpTechnology from "../components/sections/MpTechnology";
import MpServices from "../components/sections/MpServices";
import MpVideo from "../components/sections/MpVideo";

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
      <CssBaseline />
      <Grid item xs={12}>
        <Box display="flex" flexDirection="row">
          {/* <MpPageHeader /> */}

          <MpTestimonial />
          <MpTestimonial />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <MpIntroduction />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#EDF1F6" }}>
        <Container>
          <Box>
            <MpTechnology />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <MpServices />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <MpVideo />
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
)(GCard);
