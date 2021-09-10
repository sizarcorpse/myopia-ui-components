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
      "linear-gradient(0deg, rgba(3, 131, 199, 0.5), rgba(3, 131, 199, 0.5)),url(https://images.unsplash.com/photo-1614308457932-e16d85c5d053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=100)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      backgroundImage:
        "linear-gradient(0deg, rgba(3, 131, 199, 0.5), rgba(3, 131, 199, 0.5)),url(https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=100)"
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

const GlassBreakHeader = (props) => {
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
            <MpPageHeaderTitle title="Enjoy High Quality Radiology">
              Our team of specialised radiologists, technicians and
              receptionists across our sites are committed to providing patients
              and their referring clinicians with the highest standards of care
              in our modern, professional and comfortable environments.
            </MpPageHeaderTitle>
            <Box className={localClasses.callOfActions}>
              <MpButton varient="primary" linkTo="/contact">
                Access Patients Details
              </MpButton>
            </Box>
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
)(GlassBreakHeader);
