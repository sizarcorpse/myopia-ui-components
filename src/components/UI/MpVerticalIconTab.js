import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  withStyles,
  Tabs,
  Tab,
  Typography,
  Box,
  withWidth
} from "@material-ui/core";
import { Height } from "@material-ui/icons";

let data = [
  {
    icon:
      "https://myopia.cdn.prismic.io/myopia/dc26018b-8ee4-45c1-a6f5-a35d6578cc08_calander_icon.svg"
  },
  {
    icon:
      "https://myopia.cdn.prismic.io/myopia/175c9939-555f-475d-a87c-6da4cf784b81_doc_icon.svg"
  },
  {
    icon:
      "https://myopia.cdn.prismic.io/myopia/7cfd08fe-b29b-4c15-af1a-6124fb72111e_network_icon.svg"
  },
  {
    icon:
      "https://myopia.cdn.prismic.io/myopia/b44c3b98-e0ea-40b3-86ad-ed3d5239492e_time_icon.svg"
  }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  tabs: {
    padding: 0,
    "& .MuiTab-root": {
      paddingRight: theme.spacing(5),
      margin: theme.spacing(1, 0),
      minWidth: "auto",
      [theme.breakpoints.down("xs")]: {
        paddingRight: theme.spacing(0)
      },
      "& > span > img": {
        [theme.breakpoints.down("xs")]: {
          width: 65
        }
      }
    },
    "& .PrivateTabIndicator-root-24": {
      Height: 89
    }
  },
  tabContent: {
    "& > p": {
      maxWidth: "70ch",
      whiteSpace: "pre-wrap",
      margin: theme.spacing(2.5)
    }
  }
}));

const MpVerticalIconTab = (props) => {
  const { width } = props;
  const localClasses = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={localClasses.root}>
      <Tabs
        orientation={width === "xs" ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={localClasses.tabs}
        indicatorColor="secondary"
      >
        <Tab
          disableRipple
          icon={<img alt="#" src={`${data[0].icon}`} />}
          {...a11yProps(0)}
        />
        <Tab
          disableRipple
          icon={<img alt="#" src={`${data[1].icon}`} />}
          {...a11yProps(1)}
        />
        <Tab
          disableRipple
          icon={<img alt="#" src={`${data[2].icon}`} />}
          {...a11yProps(2)}
        />
        <Tab
          disableRipple
          icon={<img alt="#" src={`${data[3].icon}`} />}
          {...a11yProps(3)}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Box className={localClasses.tabContent}>
          <Typography variant="body1" color="primary">
            At Vision Radiology we take a patient focused approach to ensure our
            patients are well looked after and informed from the time the
            appointment is made. The majority of reports will be available to
            your GP or Health Care Provider within the first 24 hours of you
            leaving Vision Radiology.
          </Typography>
          <Typography variant="body1" color="primary">
            We understand many patients may be anxious at the time of illness
            and we endeavour to accommodate appointments as soon as possible.
            Other than a plain X-ray, all other examinations require a booking.
            Vision Radiology accepts referrals from all radiology providers, so
            even if you have a different referral we can perform your requested
            examination. Please call us to arrange an appointment on 03 9966
            3892, alternately complete our request an appointment form below and
            we will call you.
          </Typography>
          <Typography variant="body1" color="primary">
            Instructions will be provided to you by our receptionists when
            making your appointment. More information about the range of
            examinations is also available under services.
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box className={localClasses.tabContent}>
          <Typography variant="body1" color="primary">
            We understand many patients may be anxious at the time of illness
            and we endeavour to accommodate appointments as soon as possible.
            Other than a plain X-ray, all other examinations require a booking.
            Vision Radiology accepts referrals from all radiology providers, so
            even if you have a different referral we can perform your requested
            examination. Please call us to arrange an appointment on 03 9966
            3892, alternately complete our request an appointment form below and
            we will call you.
          </Typography>
          <Typography variant="body1" color="primary">
            At Vision Radiology we take a patient focused approach to ensure our
            patients are well looked after and informed from the time the
            appointment is made. The majority of reports will be available to
            your GP or Health Care Provider within the first 24 hours of you
            leaving Vision Radiology.
          </Typography>
          <Typography variant="body1" color="primary">
            Instructions will be provided to you by our receptionists when
            making your appointment. More information about the range of
            examinations is also available under services.
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box className={localClasses.tabContent}>
          <Typography variant="body1" color="primary">
            At Vision Radiology we take a patient focused approach to ensure our
            patients are well looked after and informed from the time the
            appointment is made. The majority of reports will be available to
            your GP or Health Care Provider within the first 24 hours of you
            leaving Vision Radiology.
          </Typography>
          <Typography variant="body1" color="primary">
            Instructions will be provided to you by our receptionists when
            making your appointment. More information about the range of
            examinations is also available under services.
          </Typography>
          <Typography variant="body1" color="primary">
            We understand many patients may be anxious at the time of illness
            and we endeavour to accommodate appointments as soon as possible.
            Other than a plain X-ray, all other examinations require a booking.
            Vision Radiology accepts referrals from all radiology providers, so
            even if you have a different referral we can perform your requested
            examination. Please call us to arrange an appointment on 03 9966
            3892, alternately complete our request an appointment form below and
            we will call you.
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box className={localClasses.tabContent}>
          <Typography variant="body1" color="primary">
            At Vision Radiology we take a patient focused approach to ensure our
            patients are well looked after and informed from the time the
            appointment is made. The majority of reports will be available to
            your GP or Health Care Provider within the first 24 hours of you
            leaving Vision Radiology.
          </Typography>
          <Typography variant="body1" color="primary">
            We understand many patients may be anxious at the time of illness
            and we endeavour to accommodate appointments as soon as possible.
            Other than a plain X-ray, all other examinations require a booking.
            Vision Radiology accepts referrals from all radiology providers, so
            even if you have a different referral we can perform your requested
            examination. Please call us to arrange an appointment on 03 9966
            3892, alternately complete our request an appointment form below and
            we will call you.
          </Typography>
          <Typography variant="body1" color="primary">
            Instructions will be provided to you by our receptionists when
            making your appointment. More information about the range of
            examinations is also available under services.
          </Typography>
        </Box>
      </TabPanel>
    </div>
  );
};

export default withWidth()(
  withStyles((theme) => ({}), { withTheme: true })(MpVerticalIconTab)
);
