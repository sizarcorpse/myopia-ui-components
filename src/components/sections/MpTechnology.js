import React, { useState } from "react";
import MpIconBox from "../UI/MpIconBox";
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
  }
}));

const Mptechnology = (props) => {
  const {} = props;
  const [data, setData] = useState([
    {
      icon:
        "https://images.prismic.io/myopia/a70eede9-d26d-48f0-9a8e-99de4e37cb9e_reliable_icon.png",
      title: "Reliable & Efficient",
      description:
        "Reliable & EfficientFrom paediatric to bariatric, whether complex or routine, it is designed and automated to deliver high quality data."
    },
    {
      icon:
        "https://images.prismic.io/myopia/ec0382c7-5673-425a-81f1-ed8af4db49b3_low+dose_icon.png",
      title: "Ultra low-dose imaging",
      description:
        "Utilising PUREVision technology to improve imaging efficiency with up to 31% less dose."
    },
    {
      icon:
        "https://images.prismic.io/myopia/6504136d-db58-47b5-9ea2-304148b02d9f_Adaptive_icon.png",
      title: "Adaptive Technology",
      description: "Simplified workflow providing consistent quality results."
    },
    {
      icon:
        "https://images.prismic.io/myopia/26e47453-a559-4f75-a72f-d185f8a21ec3_AI_icon.png",
      title: "AICE",
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
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <Box className={localClasses.technoloyContent}>
          <Typography variant="body1" color="secondary">
            State-of-the-art
          </Typography>

          <Box className={localClasses.technologyTitle}>
            <Typography variant="h2" color="primary">
              Technology
            </Typography>
            <Typography variant="body1" color="primary">
              Vision Radiology uses the best CT technology on the market, Canon
              Aquilion Prime 160 Slice CT Scanner, a scanner that provides
              better care and safer imaging.
            </Typography>
          </Box>
          <Box className={localClasses.technologyItems}>
            {data.map((item, i) => (
              <MpIconBox key={i} item={item} />
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <Box className={localClasses.technologyImage}>hi</Box>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(Mptechnology);
