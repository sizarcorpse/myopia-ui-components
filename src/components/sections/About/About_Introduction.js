import React from "react";

import MpButton from "../../UI/MpButton";
import MpSectionTitle from "../../UI/MpSectionTitle";
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
    },
    "& a": {
      [theme.breakpoints.down("xs")]: {
        textAlign: "center"
      }
    }
  }
}));

const AboutIntroduction = (props) => {
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
        <Box className={localClasses.introImageContent}>
          <img
            alt=""
            src="https://images.prismic.io/myopia/b143481b-5067-4c2f-92cc-057ef346a43c_About+us+radiologiest+section+img.png"
          />
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box className={localClasses.introContent}>
          <MpSectionTitle motto="YOUR" title="Radiologists" align="left" />

          <Typography variant="body1" color="primary">
            Our Radiologists and staff are friendly, highly skilled and
            dedicated to providing a professional stress free environment along
            with exceptional service to both patients and referring clinicians
            alike. We are an independently owned, non corporate radiology group
            which Bulk Bills most examinations.
          </Typography>
          <MpButton varient="primary" linkTo="/services">
            Choose Service
          </MpButton>
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
)(AboutIntroduction);
