import React from "react";

//Componetns
import ServicesHeader from "../components/sections/Services/Services_Header";
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
const ServicesPage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12}>
        <Box>
          <ServicesHeader />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Container>
          <Box>
            <HomeServices />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#EDF1F6" }}>
        <Container>
          <Box>
            <ServicesWhyUs />
          </Box>
        </Container>
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

export default withStyles((theme) => ({}), { withTheme: true })(ServicesPage);
