import React from "react";

import { Formik, Form, FormikHelpers, FormikProps, Field } from "formik";

import { tokens } from "../../theme";

import { Header } from "../../components/Header";
import * as Yup from "yup";
import { TextField, Box, Button, useTheme, Grid } from "@mui/material";
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address_one: string;
  address_two: string;
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
export const FormDash = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const validateSchema = Yup.object({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().email("Invalid email format").required("required"),
    phone: Yup.string()
      .matches(phoneRegExp, "PhoneN number is invalid")
      .required("required"),
    address_one: Yup.string().required("required"),
    address_two: Yup.string().required("required"),
  });

  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address_one: "",
    address_two: "",
  };

  const onSubmit = (
    values: FormValues,
    onSubmit: FormikHelpers<FormValues>
  ) => {
    console.log("submitted values");

    onSubmit.setSubmitting(false);
    onSubmit.resetForm();
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create A New User Profile" />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        {(formik: FormikProps<FormValues>) => {
          const { errors, touched, values, handleChange, handleBlur } = formik;

          return (
            <Form>
              <Grid
                container
                spacing={3}
                rowSpacing={5}
                sx={{
                  justifyContent: {
                    xs: "center",
                    md: "flex-end",
                  },
                }}
              >
                <Grid item md={6} xs={12}>
                  <TextField
                    id="firstNamr"
                    type="text"
                    name="firstName"
                    variant="filled"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    fullWidth
                  ></TextField>
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    id="lastName"
                    type="text"
                    name="lastName"
                    variant="filled"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    fullWidth
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                  ></TextField>
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    id="email"
                    type="email"
                    name="email"
                    variant="filled"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    fullWidth
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  ></TextField>
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    id="contact"
                    type="text"
                    name="phone"
                    variant="filled"
                    label="Contact"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                  ></TextField>
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    id="address_one"
                    type="text"
                    name="address_one"
                    variant="filled"
                    label="Address 1"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address_one}
                    error={!!touched.address_one && !!errors.address_one}
                    helperText={touched.address_one && errors.address_one}
                  ></TextField>
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    id="address_two"
                    type="text"
                    name="address_two"
                    variant="filled"
                    label="Address 2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address_two}
                    fullWidth
                    error={!!touched.address_two && !!errors.address_two}
                    helperText={touched.address_two && errors.address_two}
                  ></TextField>
                </Grid>

                <Grid item mt={3}>
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    disabled={
                      !((formik.isValid && formik.dirty) || formik.isSubmitting)
                    }
                  >
                    Create User
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
