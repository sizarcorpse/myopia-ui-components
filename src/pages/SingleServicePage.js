import React from "react";

//Componetns
import SingleServiceHeader from "../components/sections/Services/SingleService/SingleService_Header";
import SingleServiceQuestion from "../components/sections/Services/SingleService/SingleService_Questions";

import ContactReachUs from "../components/sections/Contact/Contact_ReachUs";
import HomeServices from "../components/sections/Home/Home_Services";
import ServicesWhyUs from "../components/sections/Services/Services_WhyUs";
import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const SingleServicePage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12}>
        <Box>
          <SingleServiceHeader />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box width="100%">
            <SingleServiceQuestion />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(
  SingleServicePage
);
