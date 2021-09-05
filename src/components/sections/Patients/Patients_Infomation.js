import React from "react";

import MpVerticalIconTab from "../../UI/MpVerticalIconTab";
import MpSectionTitle from "../../UI/MpSectionTitle";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0)
  }
}));

const PatientInformation = (props) => {
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
        <Box className={localClasses.introImageContent}>
          <MpSectionTitle
            motto="RECEIVE"
            title="Patient Information"
            align="center"
          />
          <Box my={5}>
            <MpVerticalIconTab />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(
  PatientInformation
);
