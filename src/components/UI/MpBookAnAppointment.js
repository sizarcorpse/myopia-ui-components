import React from "react";
import BookAnAppointmentFormBase from "../Form/FormBase_BookAnApp";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2.5),
    padding: theme.spacing(5),
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",

    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2.5)
    },

    "& p": {},
    "& h4": {
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.2rem"
      }
    }
  }
}));
const MpBookAnApp = (props) => {
  const localClasses = useStyles();
  return (
    <Box className={localClasses.root}>
      <Typography variant="body1" color="primary">
        Have an inquiry?
      </Typography>
      <Typography variant="h4" color="primary">
        Book a Quick Appointment
      </Typography>
      <BookAnAppointmentFormBase />
    </Box>
  );
};

// MpBookAnApp.propTypes = {
//   item: PropTypes.exact({
//     icon: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string
//   })
// };

export default withStyles((theme) => ({}), { withTheme: true })(MpBookAnApp);
