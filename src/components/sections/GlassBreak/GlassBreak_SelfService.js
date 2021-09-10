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

const GlassBreakSelfService = (props) => {
  const {} = props;
  const localClasses = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={localClasses.root}
    >
      <Grid item xl={7} lg={6} md={6} sm={12} xs={12}>
        <Box className={localClasses.introContent}>
          <MpSectionTitle
            motto="SELF SERVE"
            title="With Break-Glass"
            align="left"
          />

          <Typography variant="body1" color="primary">
            Vision Radiology has now enabled the Break-Glass feature within
            Vision Radiology Connect and Inteleviewer. This allows you to access
            your patients studies on those occasions when you weren’t the
            originating referrer.
          </Typography>
        </Box>
      </Grid>
      <Grid item xl={5} lg={6} md={6} sm={12} xs={12}>
        <Box className={localClasses.introImageContent}>
          <img
            alt=""
            src="https://images.prismic.io/myopia/757ef659-9e6c-4941-be9a-96c2a1a87732_Break+glass+img.png"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(
  GlassBreakSelfService
);
