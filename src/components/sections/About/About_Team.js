import React, { useState } from "react";
import MpTeam from "../../UI/MpTeam";
import { withStyles, makeStyles, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0)
  },

  teamMembers: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(5)
  }
}));

const AboutTeam = (props) => {
  const [data, setdata] = useState([
    {
      nameOfMember: "Dr. Maria Pianta",
      photoOfMember:
        "https://images.prismic.io/myopia/5c18ee20-35a5-489b-aa85-c85a3a8f444e_t1.png",
      qualificationOfMember: "MD, PhD1 (usa)",
      excerpt:
        "Dr. Maria Pianta, MBBS FRANZCR, graduated from Monash University, Melbourne and completed his Radiology training at The Alfred Hospital.",
      aboutMember:
        "Which included an Interventional Fellowship followed by a second at the University of Alberta Hospital in Canada specialising in Musculoskeletal Imaging. Dr Pianta enjoys all subspecialties of Radiology and has particular interests in arthritis and musculoskeletal tumour imaging as well as performing a range of therapeutic and diagnostic procedures. "
    },
    {
      nameOfMember: "Dr. Paula Marovica",
      photoOfMember:
        "https://images.prismic.io/myopia/38cdccf2-0295-400a-923c-f09b167ef10f_t2.png",
      qualificationOfMember: "MD, PhD1 (usa)",
      excerpt:
        "Paula graduated from Monash University with a Bachelor of Medicine and Bachelor of Surgery with Honours and was awarded the Bryan Hudson prize in Medicine.",
      aboutMember:
        "she underwent specialist radiology training at the Alfred Hospital, during which time she received the C.E. Eddy Prize in Radiology for the top-ranked candidate in the Part l Examination in Australia and New Zealand Paula completed fellowship subspeciality training in Magnetic Resonance Imaging (MRI) at Epworth Hospital with a focus on Neuro, Head and Neck and Musculoskeletal Radiology. she then went on to work at Imaging at Olympic Park, furthering his ski lls in diagnostic and interventional Musculoskeletal Radiology and pain management. Paula splits his time between Vision Radiology Mornington, where she is our Clinical Director, and the A Alfred Hospital where she works in the subspecialty fields of Musculoskeletal and Trauma Radiology. Paula is a member of the Australian Musculoskeletal Imaging Group (AMSIG) and Australasian Trauma Society (ATS). Paula has a keen interest in research and is well-published in the medical literature. she is an active member of the Royal Australian and New Zealand College of Radiologists where she sits on the interventional Radiology Committee. "
    },
    {
      nameOfMember: "Dr. Waen Perera",
      photoOfMember:
        "https://images.prismic.io/myopia/fc86ffee-c1ba-4cb1-ab21-2e218965484e_t3.png",
      qualificationOfMember: "MD, PhD1 (usa)",
      excerpt:
        "Dr. Waen Perera, MBBS FRANZCR graduated from Monash University, Melbourne. she completed his Radiology training at St Vincent’s Hospital. ",
      aboutMember:
        "which included a Master of Medicine in Radiology. Wean undertook an MRI fellowship in Vancouver, Canada at The University of British Columbia Hospital, covering all subspecialties with a focus on Musculoskeletal Imaging. Dr Perera has worked extensively both in public and private practice with a recent sabbatical in Body Imaging at Guys & St Thomas’ Hospital in London, UK and Neuroradiology at The Royal Melbourne Hospital. she maintains interests in all subspecialty disciplines of medical imaging however has particular expertise in sports medicine imaging, arthritis and spinal imaging as well as performing a wide range of therapeutic and diagnostic procedures. "
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
        <Box className={localClasses.teamMembers}>
          {data.map((item, i) => (
            <MpTeam team={item} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles((theme) => ({}), { withTheme: true })(AboutTeam);
