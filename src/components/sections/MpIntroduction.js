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
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0)
  },
  introImageContent: {
    padding: theme.spacing(4),
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
    "& p": {
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

const MpIntroduction = (props) => {
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
            src="https://images.prismic.io/myopia/98cba092-c24f-433d-9aa3-eeac72061ce1_locallyownedimage.png"
          />
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box className={localClasses.pageHeaderContent}>
          <Box className={localClasses.introContent}>
            <MpSectionTitle />
            <Typography variant="body1" color="primary">
              Our team of specialised radiologists, technicians and
              receptionists across our two sites are committed to providing
              patients and their referring clinicians with the highest standards
              of care in our modern, professional, and comfortable environments.
            </Typography>
            <MpButton varient="primary" linkTo="/services">
              Choose Service
            </MpButton>
          </Box>
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
)(MpIntroduction);
