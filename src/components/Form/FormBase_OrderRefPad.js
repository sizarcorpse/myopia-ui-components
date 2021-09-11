import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { validationSchema } from "./FormValidator_OrderRefPad";

import MpButton from "../UI/MpButton";
import {
  FormControl,
  Grid,
  TextField,
  Box,
  makeStyles,
  withStyles,
  MenuItem,
  TextareaAutosize,
  withWidth
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1.5)
    }
  },
  textArea: {
    maxHeight: 500,
    padding: theme.spacing(1),
    fontSize: theme.typography.body1.fontSize,
    fontFamily: theme.typography.body1.fontFamily,
    borderColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    fontWeight: theme.typography.body1.fontWeight,
    "&::placeholder": {
      textOverflow: "ellipsis",
      color: theme.palette.primary.main
    }
  },
  submitArea: {
    textAlign: "center"
  }
}));
const types = [
  {
    value: "A4 General",
    label: "A4 General"
  },
  {
    value: "A5 General",
    label: "A5 General"
  },
  {
    value: "Chiropractic",
    label: "Chiropractic"
  },
  {
    value: "Physiotherapy",
    label: "Physiotherapy"
  },
  {
    value: "Dental",
    label: "Dental"
  },
  {
    value: "Podiatry",
    label: "Podiatry"
  }
];

const FormBaseOrderRefPad = (props) => {
  const { width } = props;
  const localClasses = useStyles();

  const initialValues = {
    referrerName: "",
    practiceName: "",
    contactNumber: "",
    type: "",
    contactMessage: ""
  };

  const onSubmit = async (values, { resetForm }) => {
    const {
      referrerName,
      practiceName,
      contactNumber,
      type,
      contactMessage
    } = values;

    try {
      console.log(
        referrerName,
        practiceName,
        contactNumber,
        type,
        contactMessage
      );
    } catch (e) {}
  };

  return (
    <Box className={localClasses.root}>
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
            <Form>
              <Grid container spacing={width === "xs" ? 2 : 3}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      error={
                        touched.referrerName && Boolean(errors.referrerName)
                      }
                      autoComplete="referrerName"
                      name="referrerName"
                      variant="outlined"
                      id="referrerName"
                      label="Referrer Name"
                      type="text"
                      value={values.referrerName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      error={
                        touched.practiceName && Boolean(errors.practiceName)
                      }
                      autoComplete="practiceName"
                      name="practiceName"
                      variant="outlined"
                      fullWidth
                      type="text"
                      id="practiceName"
                      label="Practice Name"
                      value={values.practiceName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
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
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      error={touched.type && Boolean(errors.type)}
                      id="type"
                      name="type"
                      select
                      label="Select Type"
                      value={values.type}
                      onChange={handleChange}
                      variant="outlined"
                    >
                      {types.map((option) => (
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
                      touched.contactMessage && Boolean(errors.contactMessage)
                    }
                    fullWidth
                  >
                    <TextareaAutosize
                      className={localClasses.textArea}
                      variant="outlined"
                      minRows={8}
                      placeholder="Share something about your."
                      name="contactMessage"
                      id="contactMessage"
                      value={values.contactMessage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} className={localClasses.submitArea}>
                  <MpButton varient="primary" type="submit">
                    Send To Us
                  </MpButton>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default withWidth()(
  withStyles((theme) => ({}), { withTheme: true })(FormBaseOrderRefPad)
);
