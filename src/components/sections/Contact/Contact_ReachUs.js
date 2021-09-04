import React from "react";

import Lottie from "react-lottie";
import animationData from "../../../assets/animation";

import MpSectionTitle from "../../UI/MpSectionTitle";
import MpBookAnAppointmenet from "../../UI/MpBookAnAppointment";
import MpAddress from "../../UI/MpAddress";

import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center"
    }
  },
  locationContent: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "37.5rem",
      width: "100%",
      margin: "auto"
    },
    "& > p": {
      marginTop: theme.spacing(2.5),
      maxWidth: "50ch",
      [theme.breakpoints.down("xs")]: {
        textAlign: "center"
      }
    }
  },
  locations: {
    display: "flex",
    gap: theme.spacing(2.5),
    [theme.breakpoints.between("md", "lg")]: {
      flexDirection: "column"
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "37.5rem",
      width: "100%",
      justifyContent: "space-between"
    }
  }
}));

let locations = [
  {
    nameOfLocation: "Velen",
    phoneNumber: { label: "(+666) 666 33 666", value: "66666633666" },
    faxNumber: { label: "(+666) 666 13 666", value: "66666613666" },
    email: "velen@myopia.com.dark",
    address: "13  Gors Velen, Velen"
  },
  {
    nameOfLocation: "Novigrad",
    phoneNumber: { label: "(+666) 666 33 666", value: "66666633666" },
    faxNumber: { label: "(+666) 666 13 666", value: "66666613666" },
    email: "novigrad@myopia.com.dark",
    address: "13  Gors Velen, Velen"
  }
];

const ContactReachUs = (props) => {
  const {} = props;
  const localClasses = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      className={localClasses.root}
      spacing={3}
    >
      <Grid item xl={6} lg={6} md={5} sm={12} xs={12}>
        <Box className={localClasses.locationContent}>
          <MpSectionTitle
            motto="REACH"
            title="Call us or visit us!"
            align="left"
          />
          <Typography variant="body1" color="primary">
            We are near to you. You can now request your appointment with us via
            phone, email, or visit one of our available locations.
          </Typography>

          <Box className={localClasses.locations}>
            {locations.map((item, i) => (
              <MpAddress location={item} key={i} />
            ))}
          </Box>
          <Box maxHeight="440px" height="100%" width="100%">
            <Lottie
              options={defaultOptions}
              height={"inherit"}
              width={"inherit"}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={7} sm={12} xs={12}>
        <Box display="flex" justifyContent="center" my={2.5}>
          <MpBookAnAppointmenet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(ContactReachUs);
