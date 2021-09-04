import React from "react";
import Proptypes from "prop-types";

import {
  withStyles,
  makeStyles,
  Typography,
  Link,
  Box
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2.5),
    padding: theme.spacing(0.5, 0),
    "& svg": {
      color: theme.palette.secondary.main
    },
    "& p": {}
  }
}));
const MpAddressItem = (props) => {
  const { label, value, type } = props;
  const localClasses = useStyles();
  return (
    <Box className={localClasses.root}>
      {type === "phone" ? (
        <PhoneIcon fontSize="small" />
      ) : type === "email" ? (
        <EmailIcon fontSize="small" />
      ) : type === "fax" ? (
        <ImportantDevicesIcon fontSize="small" />
      ) : type === "address" ? (
        <LocationOnIcon fontSize="small" />
      ) : (
        ""
      )}
      <Typography variant="body1" color="primary">
        <Link
          href={
            type === "phone" || type === "fax"
              ? `tel:${value}`
              : type === "email"
              ? `mailto:${label}`
              : type === "address"
              ? `${label}`
              : ""
          }
          underline="none"
        >
          {label}
        </Link>
      </Typography>
    </Box>
  );
};

MpAddressItem.propTypes = {
  label: Proptypes.string,
  value: Proptypes.string,
  type: Proptypes.oneOf(["phone", "email", "fax", "adddress"])
};

export default withStyles((theme) => ({}), { withTheme: true })(MpAddressItem);
