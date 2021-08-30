import React from "react";

import MpIconBox from "../components/UI/MpIconBox";
import MpIconText from "../components/UI/MpIconText";

//Componetns
import MpPageHeader from "../components/sections/MpPageHeader";
import MpIntroduction from "../components/sections/MpIntroduction";
import MpTechnology from "../components/sections/MpTechnology";

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
        <Box>{/* <MpPageHeader /> */}</Box>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
          >
            {/* <MpIntroduction /> */}
            <MpIconText
              title="General X-Ray"
              icon="https://myopia.cdn.prismic.io/myopia/de16336a-fa5a-4271-a760-8bb7aeafc7a3_x-ray_icon.svg"
            />
            <MpIconText
              title="Ultrasound"
              icon="https://myopia.cdn.prismic.io/myopia/557d6b7e-cb62-4da9-9cab-165277b903f5_ultrasound_icon.svg"
            />
            <MpIconText
              title="Interventional Procedures"
              icon="https://myopia.cdn.prismic.io/myopia/ca63aae4-8dd4-45c1-ad65-b91c51609b3d_womenimaging_icon.svg"
            />
            <MpIconText
              title="Shear Wave Elastography"
              icon="https://myopia.cdn.prismic.io/myopia/33b2be15-afdc-4553-8a4b-9115a8585f1b_pregnancy_icon.svg"
            />
            <MpIconText
              title="Musculoskeletal Imaging"
              icon="https://myopia.cdn.prismic.io/myopia/2d37021a-d471-4ac2-b463-d6698cdd64bf_dental_icon.svg"
            />
            <MpIconText
              title="Women's Imaging"
              icon="https://myopia.cdn.prismic.io/myopia/ab0e8bb7-e318-42e5-9b94-6a034e484e2e_musculloskeleton_icon.svg"
            />
            <MpIconText
              title="Dental  Imaging"
              icon="https://myopia.cdn.prismic.io/myopia/33b2be15-afdc-4553-8a4b-9115a8585f1b_pregnancy_icon.svg"
            />
            <MpIconText
              title="Cardiac  CT"
              icon="https://myopia.cdn.prismic.io/myopia/bc4e79d5-6e82-426a-9510-1eaa2c5080a1_cardiac+CT.svg"
            />
            <MpIconText
              title="Pregnancy Imaging"
              icon="https://myopia.cdn.prismic.io/myopia/bc4e79d5-6e82-426a-9510-1eaa2c5080a1_cardiac+CT.svg"
            />
            <MpIconText
              title="BMD"
              icon="https://myopia.cdn.prismic.io/myopia/33b2be15-afdc-4553-8a4b-9115a8585f1b_pregnancy_icon.svg"
            />
            <MpIconText
              title="Calcium Scoring"
              icon="https://myopia.cdn.prismic.io/myopia/557d6b7e-cb62-4da9-9cab-165277b903f5_ultrasound_icon.svg"
            />
            <MpIconText
              title="CT Scan"
              icon="https://myopia.cdn.prismic.io/myopia/2d37021a-d471-4ac2-b463-d6698cdd64bf_dental_icon.svg"
            />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "#EDF1F6" }}>
        <Container>
          <Box>
            <MpTechnology />
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
)(GCard);
