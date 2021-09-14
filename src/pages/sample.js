import React from "react";
import MpAccordoin from "../components/UI/MpAccordoin";
import MpHero from "../components/UI/MpHero";
import MpButton from "../components/UI/MpButton";
import MpHeroTitle from "../components/UI/MpHeroTitle";
import MpButtonGroup from "../components/UI/MpButtonGroup";
//Componetns

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
        <Box>
          <MpHero>
            <MpHeroTitle title="ABOUT US" motto="Who are we?">
              Our professional staff are committed to efficiently carrying out
              the delivery of quality imaging services by utilising
              evidence-based medicine founded on the latest research and
              contributes to the scientific literature.
            </MpHeroTitle>
            <MpButtonGroup>
              <MpButton color="primary"> Search our Location</MpButton>
              <MpButton color="primary"> Search our Location</MpButton>
            </MpButtonGroup>
          </MpHero>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(GCard);
