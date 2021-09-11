import React from "react";

import MpPageHeaderTitle from "../../UI/MpPageHeaderTitle";
import MpButton from "../../UI/MpButton";
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
      "linear-gradient(0deg, rgba(3, 131, 199, 0.5), rgba(3, 131, 199, 0.5)),url(https://images.unsplash.com/photo-1583912267670-6575ad472688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=100)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      backgroundImage:
        "linear-gradient(0deg, rgba(3, 131, 199, 0.5), rgba(3, 131, 199, 0.5)),url(https://images.unsplash.com/photo-1583912268183-a34d41fe464a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=100)"
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

const OnlineImagingHeader = (props) => {
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
            <MpPageHeaderTitle title="Online Imaging">
              Our team of specialised radiologists, technicians and
              receptionists across our two sites are committed to providing
              patients and their referring clinicians with the highest standards
              of care in our modern, professional, and comfortable environments.
            </MpPageHeaderTitle>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(OnlineImagingHeader);
