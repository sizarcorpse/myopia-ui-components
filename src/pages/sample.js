import React from "react";
import MpAccordoin from "../components/UI/MpAccordoin";
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
    <Grid component="main" style={{ marginTop: 100 }}>
      <CssBaseline />

      <Grid item xs={12}>
        <Container>
          <Box>
            <MpAccordoin />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(GCard);
