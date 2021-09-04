import React from "react";
import PropTypes from "prop-types";
import MpAddressItem from "./MpAddressItem";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h4": {
      margin: theme.spacing(2.5, 0),
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.typography.h5.fontSize
      },
      [theme.breakpoints.only("sm")]: {
        fontSize: "1.5rem"
      }
    }
  }
}));
const MpAddress = (props) => {
  const {
    location: { nameOfLocation, phoneNumber, faxNumber, email, address }
  } = props;
  const localClasses = useStyles();
  return (
    <Box className={localClasses.root}>
      <Typography variant="h4" color="primary">
        {nameOfLocation}
      </Typography>
      <MpAddressItem
        label={phoneNumber.label}
        value={phoneNumber.value}
        type="phone"
      />
      <MpAddressItem
        label={faxNumber.label}
        value={faxNumber.value}
        type="fax"
      />
      <MpAddressItem label={email} type="email" />
      <MpAddressItem label={address} type="address" />
    </Box>
  );
};

MpAddress.propTypes = {
  location: PropTypes.exact({
    nameOfLocation: PropTypes.string,
    phoneNumber: PropTypes.exact({
      label: PropTypes.string,
      value: PropTypes.string
    }),
    faxNumber: PropTypes.exact({
      label: PropTypes.string,
      value: PropTypes.string
    }),
    email: PropTypes.string,
    address: PropTypes.string
  })
};

export default withStyles((theme) => ({}), { withTheme: true })(MpAddress);
