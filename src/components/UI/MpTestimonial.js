import React from "react";
import PropTypes from "prop-types";
import { isWebsiteUrl, isPhotoUrl } from "../../utils/isUrl";
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
      maxWidth: "65ch",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.875em"
      }
    }
  },

  client: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2.5),

    "& > div": {
      width: "3.5rem",
      height: "3.5rem",
      [theme.breakpoints.down("xs")]: {
        width: "3rem",
        height: "3rem"
      }
    },

    "& > p": {
      fontWeight: 600,
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.875em"
      }
    }
  },

  clientPosition: {
    fontWeight: 500,
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.875em"
    }
  }
}));

const MpTestimonial = (props) => {
  const {
    item: {
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
      <Link href={isWebsiteUrl(conpanyWebsite)}>
        <img alt={conpanyWebsite} src={companyLogo} />
      </Link>

      <Typography variant="body1" color="primary">
        {testimoniContent}
      </Typography>

      <Box className={localClasses.client}>
        <Avatar
          alt={`${clientName} + ", " ${clientPosition}`}
          src={isPhotoUrl(clientPhoto)}
        />
        <Typography variant="body1">
          <Link
            href={isWebsiteUrl(clintProfileLink)}
            underline="none"
            color="secondary"
          >
            {clientName}
          </Link>
          {","}
          <span className={localClasses.clientPosition}>{clientPosition} </span>
        </Typography>
      </Box>
    </Box>
  );
};

MpTestimonial.propTypes = {
  item: PropTypes.exact({
    companyLogo: PropTypes.string.isRequired,
    conpanyWebsite: PropTypes.string,
    testimoniContent: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    clientPosition: PropTypes.string.isRequired,
    clientPhoto: PropTypes.string.isRequired,
    clintProfileLink: PropTypes.string
  })
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(MpTestimonial);
