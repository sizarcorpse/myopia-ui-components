import React from "react";

//Componetns
import PractionerHomeHeader from "../components/sections/PractionerHome/PractionerHome_Header";
import PractionerHomeWeOffer from "../components/sections/PractionerHome/PractionerHome_WeOffer";
import PractionerHomeJoinToday from "../components/sections/PractionerHome/PractionerHome_JoinToday";
// import HomeTechnology from "../components/sections/Home/Home_Technology";
// import HomeServices from "../components/sections/Home/Home_Services";
// import HomeLearMore from "../components/sections/Home/Home_LearMore";
// import HomeTestimonials from "../components/sections/Home/Home_Testimonials";

import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const PractionerHomePage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(
  PractionerHomePage
);
