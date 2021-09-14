import React from "react";
import Proptypes from "prop-types";

import { withStyles, makeStyles, Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: theme.spacing(2.5),
    "@media(max-width: 360px)": {
      gap: theme.spacing(1.5)
    },
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center"
    }
  }
}));
const MpButtonGroup = (props) => {
  const { children } = props;
  const localClasses = useStyles();
  return (
    <Box className={localClasses.root} width="100%">
      {children}
    </Box>
  );
};

MpButtonGroup.propTypes = {
  children: Proptypes.node.isRequired
};

export default withStyles((theme) => ({}), { withTheme: true })(MpButtonGroup);
