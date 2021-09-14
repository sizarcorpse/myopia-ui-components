import React from "react";
import {
  makeStyles,
  SwipeableDrawer,
  Box,
  withStyles,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  root: {},
  iconButton: {
    color: theme.palette.primary.light
  }
}));

const MpDrawer = () => {
  const localClasses = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box className={localClasses.root}>
      {["right"].map((anchor) => (
        <Box key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            className={localClasses.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            I am drawer
          </SwipeableDrawer>
        </Box>
      ))}
    </Box>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(MpDrawer);
