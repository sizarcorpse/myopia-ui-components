import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import MpButton from "../UI/MpButton";
import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  Collapse,
  IconButton,
  Button
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5, 0),
    padding: theme.spacing(5),
    maxWidth: 900,
    display: "flex",
    gap: theme.spacing(5),
    overflow: "hidden",
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 450,
      flexDirection: "column",
      alignItems: "center"
    }
  },
  imageContent: {
    maxHeight: 280,
    flex: "1 1 260px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 260,
      padding: "auto"
    },
    "& img": {
      height: "100%",
      width: "100%"
    }
  },
  teamContent: {
    flex: "1 1 calc(100% - 260px)",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    },
    "& > h4": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.2rem"
      }
    },
    "& p": {
      margin: theme.spacing(2.5, 0)
    }
  }
}));
const MpTeam = (props) => {
  const {} = props;
  const [expanded, setExpanded] = useState(false);
  const localClasses = useStyles({ expanded });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box className={localClasses.root}>
      <Box className={localClasses.imageContent}>
        <img
          alt="name of a doctor"
          src="https://images.prismic.io/myopia/c4a5a87a-c2fc-4a7c-be68-2a46ddcc648a_t1.png"
        />
      </Box>
      <Box className={localClasses.teamContent}>
        <Typography variant="h4" color="primary">
          Dr. Marcus Pianta
        </Typography>
        <Typography variant="body1" color="primary">
          Dr Marcus Pianta, MBBS FRANZCR, graduated from Monash University,
          Melbourne and completed his Radiology training at The Alfred Hospital.
        </Typography>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body1" color="primary">
            which included an Interventional Fellowship followed by a second at
            the University of Alberta Hospital in Canada specialising in
            Musculoskeletal Imaging. Dr Pianta enjoys all subspecialties of
            Radiology and has particular interests in arthritis and
            musculoskeletal tumour imaging as well as performing a range of
            therapeutic and diagnostic procedures.
          </Typography>
        </Collapse>
        <Button
          onClick={handleExpandClick}
          endIcon={!expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          variant="contained"
          color="primary"
        >
          {!expanded ? "Read More" : "Less More"}
        </Button>
      </Box>
    </Box>
  );
};

// MpTeam.propTypes = {
//   item: PropTypes.exact({
//     icon: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string
//   })
// };

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpTeam);
