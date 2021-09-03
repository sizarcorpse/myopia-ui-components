import React, { useState } from "react";
import PropTypes from "prop-types";

import { isPhotoUrl } from "../../utils/isUrl";
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
    padding: theme.spacing(5),
    maxWidth: 900,
    display: "flex",
    gap: theme.spacing(5),
    overflow: "hidden",
    background: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 0, 5, 0),
      maxWidth: 450,
      flexDirection: "column",
      alignItems: "center"
    }
  },
  imageContent: {
    flex: "1 1 220px",
    width: 220,
    height: 218,
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    },
    "& img": {
      height: "100%",
      width: "100%",
      borderRadius: theme.shape.borderRadius,
      [theme.breakpoints.down("xs")]: {
        objectFit: "cover"
      }
    }
  },
  teamContent: {
    flex: "1 1 calc(100% - 220px)",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 2, 0, 2),
      textAlign: "center"
    },
    "& > h4": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.2rem"
      }
    },
    "& > p ~ p": {
      margin: theme.spacing(2.5, 0)
    }
  }
}));
const MpTeam = (props) => {
  const {
    team: {
      nameOfMember,
      photoOfMember,
      qualificationOfMember,
      excerpt,
      aboutMember
    }
  } = props;
  const [expanded, setExpanded] = useState(false);
  const localClasses = useStyles({ expanded });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box className={localClasses.root}>
      <Box className={localClasses.imageContent}>
        <img alt={photoOfMember} src={isPhotoUrl(photoOfMember)} />
      </Box>
      <Box className={localClasses.teamContent}>
        <Typography variant="h4" color="primary">
          {nameOfMember}
        </Typography>
        <Typography variant="body2" color="primary">
          {qualificationOfMember}
        </Typography>

        <Typography variant="body1" color="primary">
          {excerpt}
        </Typography>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body1" color="primary">
            {aboutMember}
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

MpTeam.propTypes = {
  item: PropTypes.exact({
    nameOfMember: PropTypes.string,
    photoOfMember: PropTypes.string,
    qualificationOfMember: PropTypes.string,
    excerpt: PropTypes.string,
    aboutMember: PropTypes.string
  })
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpTeam);
