import React from "react";

import MpTeam from "../components/UI/MpTeam";
//Componetns
import AboutHeader from "../components/sections/About/About_Header";
import AboutIntroduction from "../components/sections/About/About_Introduction";
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
            {/* <AboutIntroduction /> */}
            <MpTeam />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(AboutPage);
