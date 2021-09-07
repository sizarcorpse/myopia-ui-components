import React from "react";
import MpButton from "../../UI/MpButton";
import MpPageHeaderTitle from "../../UI/MpPageHeaderTitle";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Container
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "60vh",
    backgroundImage:
      "linear-gradient(0deg, rgba(3, 131, 199, 0.5), rgba(3, 131, 199, 0.5)),url(https://images.unsplash.com/photo-1516549655169-df83a0774514?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=100)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      backgroundImage:
        "linear-gradient(0deg, rgba(3, 131, 199, 0.5), rgba(3, 131, 199, 0.5)),url(https://images.unsplash.com/photo-1581090122319-8fab9528eaaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=100)"
    },
    [theme.breakpoints.up("sm")]: {
      height: "60vh"
    },
    [theme.breakpoints.up("lg")]: {
      height: "60vh"
    }
  },

  callOfActions: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      gap: theme.spacing(0)
    }
  }
}));

const ServicesHeader = (props) => {
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
        <Container>
          <Box>
            <MpPageHeaderTitle title="Our Services">
              At Vision Radiology we take a patient focused approach to ensure
              our patients are well looked after and informed from the time the
              appointment is made.
            </MpPageHeaderTitle>
            <Box className={localClasses.callOfActions}>
              <MpButton varient="secondary" linkTo="/location">
                Search our Location
              </MpButton>
              <MpButton varient="primary" linkTo="/contact">
                Book an Appointment
              </MpButton>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(ServicesHeader);
