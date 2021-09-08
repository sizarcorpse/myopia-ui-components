import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiAccordionSummary-root": {
      minHeight: 70
    }
  },
  switch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: theme.spacing(1, 0),
    "& > p": {
      flexGrow: 1
    }
  }
}));

const MpAccordoin = (props) => {
  const { item } = props;
  const localClasses = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className={localClasses.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" color="primary" style={{ fontWeight: 600 }}>
            What is an X-ray?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="primary">
            An X-ray (radiograph) is a special image that uses radiation to
            create 2D pictures of bones and other internal tissues such as your
            lungs and other organs. We use state of the art digital X-ray
            equipment, resulting in excellent image quality.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" color="primary">
            What happens during my X-ray?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="primary">
            You will be asked to stand or lie down in different positions that
            allow the best digital image of the body part of interest. During
            the X-ray, you will be asked to remain as still as possible or hold
            your breath in order to improve the quality of the images. As is the
            case with a normal photograph, anything moving will appear blurry
            and may result in the X-ray being repeated.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

// MpIconText.propTypes = {
//   item: PropTypes.exact({
//     icon: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
//   })
// };

export default withStyles((theme) => ({}), { withTheme: true })(MpAccordoin);
