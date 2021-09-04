import React from "react";
import Patients_Infomation from "../components/sections/Patients/Patients_Infomation";
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
        <Container>
          <Box display="flex" justifyContent="center">
            <Patients_Infomation />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(GCard);
