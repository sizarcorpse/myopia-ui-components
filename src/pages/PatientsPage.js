import React from "react";

//Componetns
import PatientsHeader from "../components/sections/Patients/Patients_Header";
import PatientInformation from "../components/sections/Patients/Patients_Infomation";
import ContactReachUs from "../components/sections/Contact/Contact_ReachUs";
import {
  withStyles,
  Box,
  Container,
  Grid,
  CssBaseline
} from "@material-ui/core";
const PatientsPage = (props) => {
  const {} = props;

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12}>
        <Box>
          <PatientsHeader />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <PatientInformation />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box>
            <ContactReachUs />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(PatientsPage);
