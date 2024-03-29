import React from "react";
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
    border: "1px sloid red",
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

const PractionerNavigation = (props) => {
  const {} = props;
  const localClasses = useStyles();

  return (
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
                  <Link to={"/practioner"}> Support </Link>
                </Typography>
                <Typography variant="body1">
                  <Link to={"/about"}> About </Link>
                </Typography>
                <Typography variant="body1">
                  <Link to="/patients"> Referral Forms </Link>
                </Typography>
                <Typography variant="body1">
                  <Link to="/contact"> Online Access </Link>
                </Typography>
              </Box>
            </Hidden>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles((theme) => ({}), { withTheme: true })(
  PractionerNavigation
);
