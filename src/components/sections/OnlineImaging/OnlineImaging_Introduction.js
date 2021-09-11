import React from "react";

import MpSectionTitle from "../../UI/MpSectionTitle";
import MpIconBox from "../../UI/MpIconBox";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0)
  },
  introContent: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    "& > p": {
      margin: theme.spacing(2.5, 0),
      [theme.breakpoints.down("xs")]: {
        textAlign: "center"
      }
    }
  },
  introImageContent: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    "& img": {
      width: "100%",
      maxWidth: 442,
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(0)
      }
    }
  },
  technologyItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: theme.spacing(2.5)
  },
  technologyItem: {
    margin: theme.spacing(2.5, 0),
    flex: "1 1 45%",
    [theme.breakpoints.down("sm")]: {
      flex: "1 1 100%"
    }
  }
}));
let data = [
  {
    icon:
      "https://myopia.cdn.prismic.io/myopia/0cbd4467-3729-4cad-a612-4555957b96a2_radiology+pacs+icon.svg",
    title: "Vision Radiology PAC",
    description:
      "Vision Radiology Connect is the fastest way to access patient images and reports. It works with jpeg images making download times faster. Reports and images can be viewed from any web-enabled device such as PC, MAC, mobile phone and tablets through an easy-to-use and secure web portal. Click here to login to Vision Radiology Connect"
  },
  {
    icon:
      "https://myopia.cdn.prismic.io/myopia/1d6d1cee-f99b-433e-aaf4-ef710787bc4d_Inteleviewer+icon.svg",
    title: "Vision Radiology Inteleviewer",
    description:
      "InteleViewer is an add on feature of Vision Radiology Connect. This software enables referrers to review images in more depth. DICOM viewing software will have to be installed to use this feature. Install software and bookmark"
  }
];
const OnlineImagingIntroduction = (props) => {
  const {} = props;
  const localClasses = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={localClasses.root}
    >
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box className={localClasses.introContent}>
          <MpSectionTitle motto="ONLINE" title="Imaging Details" align="left" />

          <Typography variant="body1" color="primary">
            If you have a current Vision Radiology Connect account, you can
            access our digital imaging in a number of ways. To apply for an
            account click here. If you would like us to set up an account,
            simply call our office on (03) 9966 3892 and we will attend to it.
          </Typography>
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box className={localClasses.introImageContent}>
          <img
            alt=""
            src="https://images.prismic.io/myopia/49450f02-360d-4184-8451-214c3a78e117_imaging+detail+img.png"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className={localClasses.technologyItems}>
          {data.map((item, i) => (
            <Box key={i} className={localClasses.technologyItem}>
              <MpIconBox item={item} variant="leftIcon" />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(
  OnlineImagingIntroduction
);
