import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PatientNavigation from "./PatientNavigation";
import PractionerNavigation from "./PractionerNavigation";
import {
  withStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Hidden,
  Grid,
  Switch,
  CssBaseline
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    background: (prop) =>
      prop.mode ? theme.palette.primary.main : theme.palette.secondary.main
  },
  headerArea: {
    height: 50,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& p": {
      color: (prop) =>
        prop.mode ? theme.palette.primary.light : theme.palette.primary.light
    }
  }
}));

const fn = () => {
  let haha = localStorage.getItem("mode");
  return haha === "true" ? true : haha === "false" ? false : false;
};

const Navigation = (props) => {
  const {} = props;
  const [mode, setMode] = useState(fn);
  const localClasses = useStyles({ mode });
  let history = useHistory();

  useEffect(() => {
    localStorage.setItem("mode", mode);

    if (mode === false) {
      history.push("/");
    } else if (mode === true) {
      history.push("/practioner");
    }
  }, [mode, history]);

  const handleChange = (event) => {
    setMode(!mode);
  };

  return (
    <Grid component="main">
      <CssBaseline />

      <Grid item xs={12} className={localClasses.header}>
        <Container>
          <Box className={localClasses.headerArea}>
            <Typography variant="body1" color="primary">
              Patient
            </Typography>
            <Switch
              checked={mode}
              onChange={handleChange}
              color={mode ? "secondary" : "primary"}
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="body1" color="primary">
              Practioner
            </Typography>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={5}>
        <Container>
          <Box>
            {mode === false ? <PatientNavigation /> : <PractionerNavigation />}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
export default withStyles((theme) => ({}), { withTheme: true })(Navigation);
