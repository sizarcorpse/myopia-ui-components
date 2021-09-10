import React, { useState } from "react";
import MpIconBox from "../../UI/MpIconBox";
import MpButton from "../../UI/MpButton";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0)
  },

  technologyItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: theme.spacing(2.5)
  },
  technologyItem: {
    margin: theme.spacing(2.5, 0),
    flex: "1 1 30%",
    [theme.breakpoints.down("xs")]: {
      flex: "1 1 100%"
    },
    [theme.breakpoints.only("sm")]: {
      flex: "1 1 45%",
      maxWidth: "45%"
    }
  }
}));

const GlassBreakHowTo = (props) => {
  const {} = props;
  const [data, setData] = useState([
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/2c2d0e0c-9c94-4f3f-a426-c896b5c1f8c2_icon.svg",
      title: "1. Click on padlock icon to access break glass"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/85e19836-d4e9-4aff-a062-4d228bd1b839_accept.svg",
      title: "2. Accept the terms of confidentiality agreement"
    },

    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/7eb61c43-be80-4cbc-bdac-2412c84baa28_patient+id.svg",
      title: "3. Enter the patients ID or patient name and DOB"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/ec3adfb9-4199-4636-8a46-cc8dd41ed95b_chewck+patient+icon.svg",
      title: "4. Click 'check patient'"
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/9f779e2f-f0d2-4062-a3b4-a38895376a1e_access+icon.svg",
      title: "5. Access patient studies"
    },

    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/dd0ab6cf-1ca0-45f8-9870-cc9d481b10d0_visit+us+icon.svg",
      title: "5. Access patient studies"
    }
  ]);
  const localClasses = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={localClasses.root}
    >
      <Grid item xs={12}>
        <Box className={localClasses.technologyItems}>
          {data.map((item, i) => (
            <Box key={i} className={localClasses.technologyItem}>
              <MpIconBox item={item} variant="leftIcon" titleOnly />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(
  GlassBreakHowTo
);
