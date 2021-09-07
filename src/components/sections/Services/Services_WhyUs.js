import React, { useState } from "react";
import MpIconBox from "../../UI/MpIconBox";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Container,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0)
  },
  technoloyContent: {
    "& > p": {
      fontFamily: '"Jost","sans-serif"',
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: "3.157rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
        textAlign: "center"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.35rem"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.7rem"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3rem"
      }
    }
  },
  technologyTitle: {
    marginBottom: theme.spacing(2.5),
    "& p": {
      marginTop: theme.spacing(2.5),
      [theme.breakpoints.down("xs")]: {
        textAlign: "center"
      }
    },
    "& h2": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
        textAlign: "center"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.35rem"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.7rem"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3rem"
      }
    }
  },
  technologyItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: theme.spacing(2.5)
  },
  technologyItem: {
    margin: theme.spacing(0.5, 0),
    [theme.breakpoints.up("sm")]: {
      flex: "1 1 45%"
    }
  },
  technologyImage: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    "& img": {
      width: "100%",
      maxWidth: 442,
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(0)
      }
    }
  }
}));

const ServicesWhyUs = (props) => {
  const {} = props;
  const [data, setData] = useState([
    {
      icon:
        "https://images.prismic.io/myopia/87882026-2ec4-4f5f-9abc-9e46ca7eb042_89.png",
      title: "Qualifierd doctors",
      description:
        "Reliable & EfficientFrom paediatric to bariatric, whether complex or routine, it is designed and automated to deliver high quality data."
    },
    {
      icon:
        "https://images.prismic.io/myopia/9c4b6b73-5123-432f-99d0-27b265b7de8c_004.png",
      title: "Online enrollment",
      description:
        "Utilising PUREVision technology to improve imaging efficiency with up to 31% less dose."
    },
    {
      icon:
        "https://images.prismic.io/myopia/9170734e-42c9-4d38-af23-2954dcf8df02_002.png",
      title: "Free consultation",
      description: "Simplified workflow providing consistent quality results."
    },
    {
      icon:
        "https://images.prismic.io/myopia/ef7d4568-7469-4473-9674-fd392006ef74_003.png",
      title: "Mordern facilities",
      description:
        "Ultra low dose CT with the worlds first artificial intelligence AiCE assisted CT producing higher quality diagnostic images."
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
      <Grid item xl={7} lg={7} md={10} sm={12} xs={12}>
        <Box className={localClasses.technoloyContent}>
          <Typography variant="body1" color="secondary">
            Why us?
          </Typography>

          <Box className={localClasses.technologyTitle}>
            <Typography variant="h2" color="primary">
              Myopia are pleased to offer you the chance to have the healthy.{" "}
            </Typography>
            <Typography variant="body1" color="primary">
              Vision Radiology uses the best CT technology on the market, Canon
              Aquilion Prime 160 Slice CT Scanner, a scanner that provides
              better care and safer imaging.
            </Typography>
          </Box>
          <Box className={localClasses.technologyItems}>
            {data.map((item, i) => (
              <Box key={i} className={localClasses.technologyItem}>
                <MpIconBox item={item} variant="leftIcon" />
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid item xl={5} lg={5} md={12} sm={12} xs={12}>
        <Box className={localClasses.technologyImage}>
          <img
            alt=""
            src="https://images.prismic.io/myopia/98cba092-c24f-433d-9aa3-eeac72061ce1_locallyownedimage.png"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(ServicesWhyUs);
