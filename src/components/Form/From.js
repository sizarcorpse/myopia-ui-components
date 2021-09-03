import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { validationSchema } from "./FormValidator";
import {
  FormControl,
  Grid,
  TextField,
  Box,
  makeStyles,
  withStyles,
  MenuItem,
  TextareaAutosize
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  textArea: {
    maxHeight: 500,
    padding: theme.spacing(1),
    fontSize: theme.typography.body1.fontSize,
    fontFamily: theme.typography.body1.fontFamily,
    borderColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius
  }
}));
const services = [
  {
    value: "General X-Ray",
    label: "General X-Ray"
  },
  {
    value: "Ultrasound",
    label: "Ultrasound"
  },
  {
    value: "CT Scan",
    label: "CT Scan"
  },
  {
    value: "Interventional Procedures",
    label: "Interventional Procedures"
  },
  {
    value: "Dental Imaging",
    label: "Dental Imaging"
  },
  {
    value: "Women's Imaging",
    label: "Women's Imaging"
  },
  {
    value: "Musculoskeletal Imaging",
    label: "Musculoskeletal Imaging"
  },
  {
    value: "Pregnancy Imaging",
    label: "Pregnancy Imaging"
  },
  {
    value: "Cardiac CT",
    label: "Cardiac CT"
  },
  {
    value: "Shear Wave Elastography",
    label: "Shear Wave Elastography"
  },
  {
    value: "Alcium Scoring",
    label: "Alcium Scoring"
  },
  {
    value: "BDM",
    label: "BDM"
  }
];

const locations = [
  {
    value: "Velen",
    label: "Velen"
  },
  {
    value: "Novigrad",
    label: "Novigrad"
  }
];

const ContactUs = (props) => {
  const {} = props;
  const localClasses = useStyles();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    service: "",
    location: "",
    contactMessage: ""
  };

  const onSubmit = async (values, { resetForm }) => {
    const {
      firstName,
      lastName,
      email,
      contactNumber,
      service,
      location
    } = values;

    try {
      console.log(firstName, lastName, service);
    } catch (e) {}
  };

  return (
    <Grid container component="main" style={{ marginTop: "50px" }}>
      <Grid item xs={false} xl={2} lg={2} md={1} sm={1} />
      <Grid item xs={12} xl={8} lg={8} md={10} sm={10}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => {
            const { values, touched, errors, handleChange, handleBlur } = props;

            return (
              <Box>
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <TextField
                          error={touched.firstName && Boolean(errors.firstName)}
                          autoComplete="firstName"
                          name="firstName"
                          variant="outlined"
                          id="firstName"
                          label="First Name"
                          type="text"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <TextField
                          error={touched.lastName && Boolean(errors.lastName)}
                          autoComplete="lastName"
                          name="lastName"
                          variant="outlined"
                          fullWidth
                          type="text"
                          id="lastName"
                          label="Last Name"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <TextField
                          required
                          autoComplete="email"
                          name="email"
                          variant="outlined"
                          fullWidth
                          id="email"
                          type="email"
                          label="Email Address"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <TextField
                          required
                          autoComplete="tel"
                          name="contactNumber"
                          variant="outlined"
                          fullWidth
                          id="contactNumber"
                          type="tel"
                          label="Contact Number"
                          value={values.contactNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <TextField
                          error={touched.service && Boolean(errors.service)}
                          id="service"
                          name="service"
                          select
                          label="Select Service"
                          value={values.service}
                          onChange={handleChange}
                          variant="outlined"
                        >
                          {services.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <TextField
                          error={touched.location && Boolean(errors.location)}
                          id="location"
                          name="location"
                          select
                          label="Select Location"
                          value={values.location}
                          onChange={handleChange}
                          variant="outlined"
                        >
                          {locations.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl
                        error={
                          touched.contactMessage &&
                          Boolean(errors.contactMessage)
                        }
                        fullWidth
                      >
                        <TextareaAutosize
                          className={localClasses.textArea}
                          required
                          variant="outlined"
                          rowsMin={8}
                          placeholder="Share something about your ."
                          s
                          name="contactMessage"
                          id="contactMessage"
                          value={values.contactMessage}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Form>
              </Box>
            );
          }}
        </Formik>
      </Grid>
      <Grid item xs={false} xl={2} lg={2} md={1} sm={1} />
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(ContactUs);
