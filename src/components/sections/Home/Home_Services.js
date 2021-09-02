import React, { useState } from "react";
import MpSectionTitle from "../../UI/MpSectionTitle";
import MpIconText from "../../UI/MpIconText";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  useTheme,
  withWidth
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0)
  },

  servicesItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: theme.spacing(5)
  }
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MpServices = (props) => {
  const { width } = props;
  const [data, setData] = useState([
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/de16336a-fa5a-4271-a760-8bb7aeafc7a3_x-ray_icon.svg",
      title: "General X-Ray"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/557d6b7e-cb62-4da9-9cab-165277b903f5_ultrasound_icon.svg",
      title: "Ultrasound"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/7d88fc27-5073-44bf-ab64-4fbcc01a3c80_Ctscan_icon.svg",
      title: "CT Scan"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/e5eb232c-fabd-4d4d-9d89-066260a5f1e0_injection_icon.svg",
      title: "Interventional Procedures"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/2d37021a-d471-4ac2-b463-d6698cdd64bf_dental_icon.svg",
      title: "Dental  Imaging"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/ca63aae4-8dd4-45c1-ad65-b91c51609b3d_womenimaging_icon.svg",
      title: "Women's Imaging"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/ab0e8bb7-e318-42e5-9b94-6a034e484e2e_musculloskeleton_icon.svg",
      title: "Musculoskeletal Imaging"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/33b2be15-afdc-4553-8a4b-9115a8585f1b_pregnancy_icon.svg",
      title: "Pregnancy Imaging"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/bc4e79d5-6e82-426a-9510-1eaa2c5080a1_cardiac+CT.svg",
      title: "Cardiac  CT"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/ca63aae4-8dd4-45c1-ad65-b91c51609b3d_womenimaging_icon.svg",
      title: "Shear Wave Elastography"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/ab0e8bb7-e318-42e5-9b94-6a034e484e2e_musculloskeleton_icon.svg",
      title: "Calcium Scoring"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/de16336a-fa5a-4271-a760-8bb7aeafc7a3_x-ray_icon.svg",
      title: "BMD"
    }
  ]);
  const localClasses = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={localClasses.root}
    >
      <Grid item xs={12}>
        <Box className={localClasses.servicesContent}>
          <MpSectionTitle
            motto="SERVICES"
            title="What we offers."
            align="center"
          />

          <Box className={localClasses.servicesItems} width="100%">
            {width === "xs" ? (
              <Box
                maxWidth="100%"
                height="auto"
                display="flex"
                justifyContent="center"
                flexGrow={1}
              >
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {data.map((item, index) => (
                    <Box
                      key={item.label}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                    >
                      {Math.abs(activeStep - index) <= 2 ? (
                        <MpIconText icon={item.icon} title={item.title} />
                      ) : null}
                    </Box>
                  ))}
                </AutoPlaySwipeableViews>
              </Box>
            ) : (
              <>
                {data.map((item, i) => (
                  <MpIconText key={i} icon={item.icon} title={item.title} />
                ))}
              </>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withWidth()(
  withStyles(
    (theme) => ({
      // ...ThemeDistributor(theme)
    }),
    { withTheme: true }
  )(MpServices)
);
