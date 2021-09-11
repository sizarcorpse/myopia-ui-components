import React from "react";

import FormBaseOrderRefPad from "../../Form/FormBase_OrderRefPad";
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
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center"
    },
    "& h3": {
      textAlign: "center",
      marginBottom: theme.spacing(2.5),
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.8rem",
        textAlign: "center"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.9rem"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2.2rem"
      }
    }
  }
}));

const OrderReferralPadForm = (props) => {
  const { width } = props;
  const localClasses = useStyles();

  return (
    <Grid container justifyContent="center" className={localClasses.root}>
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          my={2.5}
        >
          <Typography variant="h3" color="primary">
            Please fill in the form below to order more referral pads and we
            will deliver them to your practice.
          </Typography>
          <FormBaseOrderRefPad />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withWidth()(
  withStyles((theme) => ({}), { withTheme: true })(OrderReferralPadForm)
);
