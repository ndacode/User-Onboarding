import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { withFormik, Form, Field, ErrorMessage, yupToFormErrors, Formik } from 'formik';
import * as Yup from 'yup';




function OnBoardApp({values}) {
  return (
      <Formik
          onSubmit={(values, tools) => {
              console.log(values, tools);
              tools.resetForm();
          } }
          initialvalues={{name: '', email:'', password: '', terms:''}}
          render = {props => {
              return(
                  <Form>
                      <label>Name </label>
                      <Field name='name' type='text' placeholder='enter name'/>
                      <ErrorMessage name='name' component='div' className='warning'/>
                      <label>Email </label>
                      <Field name='email' value={values.name} type='email' placeholder='enter email address'/>
                      <ErrorMessage name='email' component='div' className='warning'/>
                      <label>Password </label>
                      <Field name='passord' type='text' placeholder='enter password'/>
                      <ErrorMessage name='password' component='div' className='warning'/>
                      <label>Please Agree to Terms of Service </label>
                      <Field name='terms' type='checkbox' placeholder='Agree to terms of service.'/>
                      <ErrorMessage name='terms' component='div' className='warning'/>
                      
                      <input type='submit' />
                  </Form>
              )
          }}
      />
  )
};

const FormikOnBoardApp = withFormik({
  mapPropsToValues(name, email, password, terms) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },
 /// THIS IS WHERE YOU DO THE HTTP REQUEST
 //--- VALIDATION SCHEMA ----//
 validationSchema: Yup.object().shape({
   name: Yup.string()
    .required("Please enter your name"),
   email: Yup.string("Please enter a valid email address")
    .required("Email is required"),
   password: Yup.string("Please enter your password")
    .min(6)
    .required("Password is required")
 }),
  handleSubmit(values) {
    console.log(values);
  }
})(OnBoardApp)

export default FormikOnBoardApp;
