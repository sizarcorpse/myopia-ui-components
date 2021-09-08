import React from "react";

//Componetns
import MpAccordoin from "../../../UI/MpAccordoin";
import MpIconText from "../../../UI/MpIconText";
import MpSlider from "../../../UI/MpSlider";
import { servicesLists as data } from "../../../../assets/servicesList";

import {
  withStyles,
  makeStyles,
  Box,
  Grid,
  withWidth,
  Typography
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
  },
  servicesTitle: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    height: 50,
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(3),
    "& h5": {
      color: theme.palette.primary.light
    }
  }
}));

let questions = [
  {
    id: 1,
    title: "What is an X-ray?",
    content:
      "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality."
  },
  {
    id: 2,
    title: "What happens during my X-ray?",
    content:
      "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated."
  },
  {
    id: 3,
    title: "How long will it take?",
    content: "An X-ray exam usually takes 5 to 10 minutes per area of the body."
  },
  {
    id: 4,
    title: "Do I need an appointment?",
    content:
      "There is no appointment needed for your X-ray. Come in at a time that works best for you."
  },
  {
    id: 5,
    title: "How much does it cost?",
    content:
      "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses."
  },
  {
    id: 6,
    title: "Can I use my referral anywhere?",
    content:
      "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional."
  },
  {
    id: 7,
    title: "How do I prepare for my X-ray?",
    content:
      "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray."
  }
];

const SingleServiceQuestion = (props) => {
  const { width } = props;
  const localClasses = useStyles();
  return (
    <Grid container spacing={3} className={localClasses.root}>
      <Grid item xs={6}>
        <Box>
          {/* {questions.map((item, i) => (
            <MpAccordoin item={item} key={i} />
          ))} */}
          <MpAccordoin questions={questions} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Box className={localClasses.servicesTitle}>
            <Typography variant="h5" color="primary">
              Our Services
            </Typography>
          </Box>
          <Box className={localClasses.servicesItems}>
            {width === "xs" ? (
              <MpSlider data={data} mpComopnent={<MpIconText />} />
            ) : (
              <>
                {data.map((item, i) => (
                  <MpIconText key={i} item={item} size="small" />
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
  withStyles((theme) => ({}), { withTheme: true })(SingleServiceQuestion)
);
