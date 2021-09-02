import React from "react";

//Componetns
import HomeHeader from "../components/sections/Home/Home_Header";
import HomeIntroduction from "../components/sections/Home/Home_Introduction";
import HomeTechnology from "../components/sections/Home/Home_Technology";
import HomeServices from "../components/sections/Home/Home_Services";
import HomeLearMore from "../components/sections/Home/Home_LearMore";
import HomeTestimonials from "../components/sections/Home/Home_Testimonials";

import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const HomePage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12}>
        <Box>
          <HomeHeader />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <HomeIntroduction />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#EDF1F6" }}>
        <Container>
          <Box>
            <HomeTechnology />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <HomeServices />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <HomeLearMore />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <HomeTestimonials />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(HomePage);
