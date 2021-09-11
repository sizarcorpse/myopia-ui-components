import React from "react";

//Componetns
import OrderReferralPadHeader from "../components/sections/OrderReferralPad/OrderReferralPad_Header";
import OrderReferralPadForm from "../components/sections/OrderReferralPad/OrderReferralPad_Form";

import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const OrderReferralPadPage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12}>
        <Box>
          <OrderReferralPadHeader />
        </Box>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#EDF1F6" }}>
        <Container maxWidth="md">
          <Box>
            <OrderReferralPadForm />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(
  OrderReferralPadPage
);
