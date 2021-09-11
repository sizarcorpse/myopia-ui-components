import React from "react";

//Componetns
import GlassBreakHeader from "../components/sections/GlassBreak/GlassBreak_Header";
import GlassBreakSelfService from "../components/sections/GlassBreak/GlassBreak_SelfService";
import GlassBreakHowTo from "../components/sections/GlassBreak/GlassBreak_HowTo";

import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const GlassBreakPage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12}>
        <Box>
          <GlassBreakHeader />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Container>
          <Box>
            <GlassBreakSelfService />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#EDF1F6" }}>
        <Container>
          <Box>
            <GlassBreakHowTo />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(GlassBreakPage);
