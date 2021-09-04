import React from "react";

//Componetns
import ContactHeader from "../components/sections/Contact/Contact_Header";
import ContactReachUs from "../components/sections/Contact/Contact_ReachUs";

import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const ContactUsPage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12}>
        <Box>
          <ContactHeader />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <ContactReachUs />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(ContactUsPage);
