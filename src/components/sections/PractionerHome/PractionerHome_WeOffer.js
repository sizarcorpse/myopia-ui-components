import React from "react";
import MpButton from "../../UI/MpButton";
import MpSectionTitle from "../../UI/MpSectionTitle";
import MpIconText from "../../UI/MpIconText";
import MpSlide from "../../UI/MpSlider";
import { servicesLists as data } from "../../../assets/offerList";

import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Typography,
  withWidth
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0),
    maxWidth: 940,
    margin: "auto"
  },
  servicesItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    maxWidth: 940,
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(5),
      maxWidth: 700,
      margin: "auto"
    }
  },
  introContent: {
    textAlign: "center",
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

const PractionerHomeWeOffer = (props) => {
  const { width } = props;
  const localClasses = useStyles();

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
            motto="WE OFFER"
            title="Referrer Information"
            align="center"
          />
          <Box className={localClasses.introContent}>
            <Typography variant="body1" color="primary">
              Welcome to Vision Radiology. We are delighted to be able to offer
              you and your patients premium quality imaging services in our
              state of the art facilities at Coburg and Thornbury. We offer a
              comprehensive range of services.
            </Typography>
            <MpButton varient="primary" linkTo="/services">
              Choose Service
            </MpButton>
          </Box>
          <Box className={localClasses.servicesItems} width="100%">
            {width === "xs" ? (
              <MpSlide data={data} mpComopnent={<MpIconText />} />
            ) : (
              <>
                {data.map((item, i) => (
                  <MpIconText
                    key={i}
                    item={item}
                    size={width === "md" ? "small" : undefined}
                  />
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
  withStyles((theme) => ({}), { withTheme: true })(PractionerHomeWeOffer)
);
