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
  const { questions } = props;
  const localClasses = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className={localClasses.root}>
      {questions.map((item, i) => (
        <Accordion
          expanded={expanded === `panel1${item.id}`}
          onChange={handleChange(`panel1${item.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              color="primary"
              style={{ fontWeight: 400 }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="primary">
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

// MpAccordoin.propTypes = {
//   item: PropTypes.exact({
//     id: PropTypes.any,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired
//   })
// };

export default withStyles((theme) => ({}), { withTheme: true })(MpAccordoin);
