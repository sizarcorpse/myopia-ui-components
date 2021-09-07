import React, { useState, cloneElement } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@material-ui/core/MobileStepper";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  useTheme,
  withWidth
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  dot: {
    display: "flex",
    justifyContent: "center",

    "& .MuiMobileStepper-dots": {
      display: "flex",
      gap: 3
    },
    "& .MuiMobileStepper-dot": {
      transition: "all 250ms ease-out 0ms"
    },
    "& .MuiMobileStepper-dot.MuiMobileStepper-dotActive": {
      transform: "scale(2)",
      transition: "all 500ms ease 0ms"
    }
  }
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MpSlider = (props) => {
  const { width, data, compo } = props;
  const localClasses = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      maxWidth="100%"
      height="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flexGrow={1}
      style={{ gap: 16 }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((item, index) => (
          <Box
            key={item.index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            {Math.abs(activeStep - index) <= 2
              ? cloneElement(compo, { item: item })
              : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={localClasses.dot}
      />
    </Box>
  );
};

export default withWidth()(
  withStyles((theme) => ({}), { withTheme: true })(MpSlider)
);
