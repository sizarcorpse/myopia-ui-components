import React, { useState } from "react";

//Componetns
import AboutHeader from "../components/sections/About/About_Header";
import AboutIntroduction from "../components/sections/About/About_Introduction";
import AboutTeam from "../components/sections/About/About_Team";
import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const AboutPage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12}>
        <Box>
          <AboutHeader />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            {" "}
            <AboutIntroduction />{" "}
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#EDF1F6" }}>
        <Container>
          <AboutTeam />
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(AboutPage);
