import React from "react";

//Componetns
import PractionerHomeHeader from "../components/sections/PractionerHome/PractionerHome_Header";

import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const PractionerGlassBreakPage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      {/* <Grid item xs={12}>
        <Box>
          <PractionerHomeHeader />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <PractionerHomeWeOffer />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#EDF1F6" }}>
        <Container>
          <Box>
            <PractionerHomeJoinToday />
          </Box>
        </Container>
      </Grid> */}
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(
  PractionerGlassBreakPage
);
