import React from "react";
import PropTypes from "prop-types";

import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  Link,
  Avatar,
  CardHeader
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    gap: theme.spacing(2.5),
    padding: theme.spacing(4),
    margin: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",

    "& > img": {
      width: 157,
      height: 40
    }
  },
  client: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2.5),
    "& > div": {
      width: theme.spacing(7),
      height: theme.spacing(7)
    },

    "& > p": {
      fontWeight: 600
    }
  },
  position: {
    fontWeight: 500,
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.main
  }
}));

const MpTestimonial = (props) => {
  const { icon, title } = props;
  const localClasses = useStyles();
  return (
    <Box className={localClasses.root}>
      <img
        alt=" "
        src="https://images.prismic.io/myopia/d7739a68-3dd0-45a8-b6f5-b49264f7200e_logo1.png"
        className={localClasses.media}
      />
      <Typography variant="body1" color="primary">
        Our partnership with the Strapi team enables us to give more flexibility
        and velocity to our product, marketing & customer care teams to manage
        content on the platform.
      </Typography>
      <Box className={localClasses.client}>
        <Avatar
          src="https://images.prismic.io/myopia/088e3cc1-d8c4-4eee-b9d4-df3c7eaff3fd_person1.png"
          className={localClasses.large}
        />
        <Typography variant="body1" color="secondary">
          Bradley Cooper{","}
          <span className={localClasses.position}>Founder </span>
        </Typography>
      </Box>
    </Box>
  );
};

MpTestimonial.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpTestimonial);
