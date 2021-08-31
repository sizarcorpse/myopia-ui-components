import React from "react";
import PropTypes from "prop-types";

import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  Link,
  Avatar
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: "1 10 378.6px",
    gap: theme.spacing(2.5),
    padding: theme.spacing(4),
    margin: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#EDF1F6",
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px;",

    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1)
    },
    [theme.breakpoints.down("md")]: {
      flex: "1 1 320px"
    },

    "& a > img": {
      width: "9.8125em",
      height: "2.5em"
    },

    "& > p": {
      maxWidth: "65ch"
    }
  },

  client: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2.5),

    "& > div": {
      width: "4rem",
      height: "4rem"
    },

    "& > p": {
      fontWeight: 600
    }
  },

  clientPosition: {
    fontWeight: 500,
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.main
  }
}));

const MpTestimonial = (props) => {
  const {
    testimonial: {
      companyLogo,
      conpanyWebsite,
      testimoniContent,
      clientName,
      clientPosition,
      clientPhoto,
      clintProfileLink
    }
  } = props;
  const localClasses = useStyles();
  return (
    <Box className={localClasses.root}>
      <Link href={conpanyWebsite}>
        <img alt={conpanyWebsite} src={companyLogo} />
      </Link>

      <Typography variant="body1" color="primary">
        {testimoniContent}
      </Typography>

      <Box className={localClasses.client}>
        <Avatar
          alt={`${clientName} + ", " ${clientPosition}`}
          src={clientPhoto}
        />
        <Typography variant="body1">
          <Link href={clintProfileLink} underline="none" color="secondary">
            {clientName}
          </Link>
          {","}
          <span className={localClasses.clientPosition}>{clientPosition} </span>
        </Typography>
      </Box>
    </Box>
  );
};

// MpTestimonial.propTypes = {
// companyLogo,
// conpanyWebsite,
// testimoniContent,
// clientName,
// clientPosition,
// clientPhoto,
// clintProfileLink
// };

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpTestimonial);
