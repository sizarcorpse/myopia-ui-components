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
  technologyTitle: {
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
    },
    "& p": {
      margin: theme.spacing(2.5, 0),
      [theme.breakpoints.down("xs")]: {
        textAlign: "center"
      }
    }
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
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
    margin: theme.spacing(2.5, 0),

    [theme.breakpoints.down("xs")]: {
      flex: "1 1 100%"
    },
    [theme.breakpoints.up("sm")]: {
      flex: "1 1 45%",
      maxWidth: "45%"
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

const PractionerHomeJoinToday = (props) => {
  const {} = props;
  const [data, setData] = useState([
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/ad6e8395-76c3-4481-83d0-15598d7f3a38_network+icon.svg",
      title: "Network of clinics",
      description:
        "We offer a comprehensive range of services at our 5 locations throughout Victoria."
    },
    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/e5c86cd2-2aca-4c89-9e09-4f808bc9c15c_patientcare_icon.svg",
      title: "Patient care",
      description:
        "We take a patient focused approach to ensure our patients are well looked after and informed."
    },

    {
      icon:
        "https://myopia.cdn.prismic.io/myopia/7b22d93d-8ed4-46e1-8508-546e259285ea_expert_icon.svg",
      title: "Expertise",
      description:
        "Our simplified workflow provides consistent quality results."
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
          <Box className={localClasses.technologyTitle}>
            <Typography variant="h2" color="primary">
              We perform 1 million Patient procedures each year
            </Typography>
            <Typography variant="body1" color="primary">
              Our Radiologists and staff are friendly, highly skilled and
              dedicated to providing a professional stress-free environment
              along with exceptional service to both patients and referring
              clinician alike. With the use of the latest radiology technology.
            </Typography>

            <Box className={localClasses.button}>
              <MpButton varient="primary" linkTo="#">
                Join Us Today
              </MpButton>
            </Box>
          </Box>
          <Box className={localClasses.technologyItems}>
            {data.map((item, i) => (
              <Box key={i} className={localClasses.technologyItem}>
                <MpIconBox item={item} variant="topIcon" textCenter />
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

export default withStyles((theme) => ({}), { withTheme: true })(
  PractionerHomeJoinToday
);
