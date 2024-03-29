import React from "react";
import MpDrawer from "../../Drawer/MpDrawer";
import { Link } from "react-router-dom";
import {
  withStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Hidden
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    background: "transparent",
    height: "5.625em",
    maxHeight: "5.625em",
    display: "flex",
    justifyContent: "center",
    "& a": {
      textDecoration: "none"
    }
  },
  navigationContent: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    "& > h4 a": {
      color: theme.palette.primary.light,
      flexGrow: 1
    }
  },
  navigationItems: {
    display: "flex",
    marginLeft: "auto",

    "& p a": {
      margin: theme.spacing(0, 2.5),
      color: theme.palette.primary.light,
      fontWeight: 500
    }
  }
}));

const PatientNavigation = (props) => {
  const {} = props;
  const localClasses = useStyles();

  return (
    <Container>
      <AppBar elevation={0} className={localClasses.root} position="absolute">
        <Toolbar>
          <Container>
            <Box className={localClasses.navigationContent}>
              <Typography variant="h4">
                <Link to={"/"}> MYOPIA </Link>
              </Typography>
              <Hidden smDown>
                <Box className={localClasses.navigationItems}>
                  <Typography variant="body1">
                    <Link to={"/about"}> About </Link>
                  </Typography>
                  <Typography variant="body1">
                    <Link to={"/services"}> Services </Link>
                  </Typography>
                  <Typography variant="body1">
                    <Link to="/patients"> Patient </Link>
                  </Typography>
                  <Typography variant="body1">
                    <Link to="/contact"> Contact </Link>
                  </Typography>
                </Box>
              </Hidden>
              <Hidden smUp>
                <Box ml="auto">
                  <MpDrawer />
                </Box>
              </Hidden>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default withStyles((theme) => ({}), { withTheme: true })(
  PatientNavigation
);
