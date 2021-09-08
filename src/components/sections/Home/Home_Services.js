import React, { useState } from "react";
import MpSectionTitle from "../../UI/MpSectionTitle";
import MpIconText from "../../UI/MpIconText";
import MpSlide from "../../UI/MpSlider";
import { servicesLists as data } from "../../../assets/servicesList";

import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  withWidth
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0)
  },

  servicesItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: theme.spacing(5)
  }
}));

const HomeServices = (props) => {
  const { width } = props;

  const localClasses = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={localClasses.root}
    >
      <Grid item xs={12}>
        <Box className={localClasses.servicesContent}>
          <MpSectionTitle
            motto="SERVICES"
            title="What we offers."
            align="center"
          />

          <Box className={localClasses.servicesItems} width="100%">
            {width === "xs" ? (
              <MpSlide data={data} mpComopnent={<MpIconText />} />
            ) : (
              <>
                {data.map((item, i) => (
                  <MpIconText key={i} item={item} />
                ))}
              </>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withWidth()(
  withStyles((theme) => ({}), { withTheme: true })(HomeServices)
);
