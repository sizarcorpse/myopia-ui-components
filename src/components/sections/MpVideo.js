import React from "react";

import MpButton from "../UI/MpButton";
import MpSectionTitle from "../UI/MpSectionTitle";
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
  learnContent: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    },
    "& > p": {
      margin: theme.spacing(2.5, 0),
      [theme.breakpoints.down("xs")]: {
        textAlign: "center"
      }
    }
  },
  videoContent: {
    padding: theme.spacing(2.5, 0)
  }
}));

const MpVideo = (props) => {
  const {} = props;
  const localClasses = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={localClasses.root}
    >
      <Grid item xs={12}>
        <Box className={localClasses.introContent}>
          <MpSectionTitle motto="LEARN" title="More About Us" align="left" />

          <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Box className={localClasses.learnContent}>
                <Typography variant="body1" color="primary">
                  Our team of specialised radiologists, technicians and
                  receptionists across our two sites are committed to providing
                  patients and their referring clinicians with the highest
                  standards of care in our modern, professional, and comfortable
                  environments.
                </Typography>
                <MpButton varient="primary" linkTo="/services">
                  Learn More
                </MpButton>
              </Box>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Box
                className={localClasses.videoContent}
                display="flex"
                justifyContent="center"
              >
                <iframe
                  title="sd"
                  id="video"
                  width="565"
                  height="318"
                  src="https://www.youtube.com/embed/7pHtdbXeGJA"
                  frameBorder="0"
                  allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpVideo);
