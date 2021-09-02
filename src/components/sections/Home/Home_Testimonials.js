import React, { useState } from "react";

import MpSectionTitle from "../../UI/MpSectionTitle";
import MpTestimonial from "../../UI/MpTestimonial";
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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

const HomeTestimonials = (props) => {
  const { width } = props;
  const localClasses = useStyles();
  const [data, setData] = useState([
    {
      companyLogo:
        "https://images.prismic.io/myopia/d7739a68-3dd0-45a8-b6f5-b49264f7200e_logo1.png",
      conpanyWebsite: "#",
      testimoniContent:
        "Our partnership with the Strapi team enables us to give more flexibility and velocity to our product, marketing & customer care teams to manage content on the platform.",
      clientName: "Bradley Cooper",
      clientPosition: "DevOps Team Lead",
      clientPhoto:
        "https://images.prismic.io/myopia/088e3cc1-d8c4-4eee-b9d4-df3c7eaff3fd_person1.png",
      clintProfileLink: "#"
    },
    {
      companyLogo:
        "https://images.prismic.io/myopia/c664dc81-6c0b-4553-aff2-af7338b9f751_logo2.png",
      conpanyWebsite: "#",
      testimoniContent:
        "Lorem Ipsum is try. Lorem Ipsum has been the industry's  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      clientName: "Henry Cavill",
      clientPosition: "Senior Writer",
      clientPhoto:
        "https://images.prismic.io/myopia/a6b0f631-2bb0-4fa9-8b60-49bb6b0c6bb7_person3.png",
      clintProfileLink: "#"
    },
    {
      companyLogo:
        "https://images.prismic.io/myopia/d7739a68-3dd0-45a8-b6f5-b49264f7200e_logo1.png",
      conpanyWebsite: "#",
      testimoniContent:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure",
      clientName: "Charlize Theron",
      clientPosition: "CEO",
      clientPhoto:
        "https://images.prismic.io/myopia/1e7e0840-fae6-4d8f-b775-865f56eff78b_person4.png",
      clintProfileLink: "#"
    },
    {
      companyLogo:
        "https://images.prismic.io/myopia/332d23aa-12e0-496c-963e-cc88903aad0c_logo3.png",
      conpanyWebsite: "#",
      testimoniContent:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      clientName: "Tom Hardy",
      clientPosition: "CFO",
      clientPhoto:
        "https://images.prismic.io/myopia/f9769640-6edc-4b24-8a9e-0d614b908d60_person2.png",
      clintProfileLink: "#"
    },
    {
      companyLogo:
        "https://images.prismic.io/myopia/e6efd14d-b288-4cef-bdf2-a3371e0316a5_logo4.png",
      conpanyWebsite: "#",
      testimoniContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
      clientName: "Cristiano Ronaldo",
      clientPosition: "Founder",
      clientPhoto:
        "https://images.prismic.io/myopia/6c913f01-97cb-4ffd-8598-cbf45e7c61b5_person6.png",
      clintProfileLink: "#"
    },
    {
      companyLogo:
        "https://images.prismic.io/myopia/0dd7fb22-320a-4b6a-be5f-83d19462791d_logo5.png",
      conpanyWebsite: "#",
      testimoniContent:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
      clientName: "Julianne Moore",
      clientPosition: "Co-Founder",
      clientPhoto:
        "https://images.prismic.io/myopia/daebaccd-641a-4c87-8788-b7e9fa8c4862_person5.png",
      clintProfileLink: "#"
    }
  ]);

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
        <Box className={localClasses.introContent}>
          <MpSectionTitle
            motto="REVIEWS"
            title="Here’s what people have to say"
            align="center"
          />

          <Box className={localClasses.servicesItems} width="100%">
            {width === "sm" || width === "xs" ? (
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
                      maxWidth={{ xs: "100%", sm: "calc(100% - 60px)" }}
                      style={{ margin: "auto" }}
                    >
                      {Math.abs(activeStep - index) <= 2 ? (
                        <MpTestimonial testimonial={item} />
                      ) : null}
                    </Box>
                  ))}
                </AutoPlaySwipeableViews>
              </Box>
            ) : (
              <Box
                // ! fix this mess
                style={{
                  width: "100%",
                  display: "grid",
                  gap: "2px",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gridAutoRows: "auto"
                }}
              >
                {data.map((item, i) => (
                  <MpTestimonial key={i} testimonial={item} />
                ))}
              </Box>
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
  )(HomeTestimonials)
);
