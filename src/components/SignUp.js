import React from 'react';
import { Grid, Paper, Avatar, Typography, Button, TextField } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const SignUp=() => {

  const navigate = useNavigate();

  const fields = [
    {
      id: 1,
      label: 'First name',
      name: 'firstName',
      placeholder: 'Enter first name',
      type: 'text'
    },
    {
      id: 2,
      label: 'Last name',
      name: 'lastName',
      placeholder: 'Enter last name',
      type: 'text'
    },
    {
      id: 3,
      label: 'Email',
      name: 'email',
      placeholder: 'Enter email name',
      type: 'email'
    },
    {
      id: 4,
      label: 'Password',
      name: 'password',
      placeholder: 'Enter password',
      type: 'password'
    },
    {
      id: 5,
      label: 'Confirm password',
      name: 'confirmPassword',
      placeholder: 'Confirm password',
      type: 'password'
    }];
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required').matches('^[A-Z][a-zA-Z]+$', 'Please enter valid first name'),
    lastName: Yup.string().required('Required').matches('^[A-Z][a-zA-Z]+$', 'Please enter valid last name'),
    email: Yup.string().email('Please enter valid email').required('Required'),
    password: Yup.string().matches('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$',
                                   'Password must contain at least 8 characters (uppercase letter, lowercase letter, digit, special character)').required('Required'),
    confirmPassword: Yup.string().oneOf( [ Yup.ref('password'), null ],
                                         'Passwords must match').required('Required'),
  });

  const handleSignUp = async (values, props) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      console.log(user);
      props.resetForm();
      props.setSubmitting(false);
      navigate('/app');
    } catch (error) {
      alert('Something is wrong. Try again...');
    }

  };
  return (
    <>
      <Grid>
        <Paper className='paperStyle'>
          <Grid align='center'>
            <Avatar><AddCircleOutlineOutlinedIcon/></Avatar>
            <h2>Sign Up</h2>
            <Typography variant='caption'>Already have an account?&nbsp;
              <Link to='/signin'>
                Sign in!
              </Link>
            </Typography>
          </Grid>
          <Formik initialValues={initialValues} onSubmit={handleSignUp}
            validationSchema={validationSchema}>
            {(formik) => (
              <Form>
                {fields.map((item) => (
                  <Field as={TextField} key={item.id} label={item.label}
                    name={item.name} placeholder={item.placeholder} fullWidth required type={item.type}
                    helperText={<ErrorMessage name={item.name} />}/>
                ))}
                <Button type='submit' color='primary' variant='contained'
                  disabled={ ((!(formik.isValid && formik.dirty)) || formik.isSubmitting)}>SIGN UP
                </Button>

              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </>
  );
};
SignUp.propTypes = {
  resetForm: PropTypes.func,
  setSubmitting: PropTypes.func
};
export default SignUp;
