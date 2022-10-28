import React from 'react';
import { Grid, Paper, Avatar, Button, TextField } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignIn=() => {

  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email').required('Required'),
    password: Yup.string().matches('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$',
                                   'Password must contain at least 8 characters (uppercase letter, lowercase letter, digit, special character)').required('Required'),
  });

  const handleSignIn = async(values, props) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log(user);
      props.resetForm();
      props.setSubmitting(false);
      navigate('/app');
    } catch (error) {
      alert('Incorrect email or password! Check again...');
    }
  };

  return (
    <>
      <Grid>
        <Paper className='paperStyle'>
          <Grid align='center'>
            <Avatar><AddCircleOutlineOutlinedIcon/></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <Formik initialValues={initialValues} onSubmit={handleSignIn}
            validationSchema={validationSchema}>
            {(formik) => (
              <Form>
                <Field as={TextField} label='Email'
                  name='email' placeholder='Enter email' fullWidth required type='email'
                  helperText={<ErrorMessage name='email' />}/>
                <Field as={TextField} label='Password'
                  name='password' placeholder='Enter password' fullWidth required type='password'
                  helperText={<ErrorMessage name='password' />}/>
                <Button type='submit' color='primary' variant='contained'
                  disabled={ ((!(formik.isValid && formik.dirty)) || formik.isSubmitting) }>SIGN IN
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </>
  );
};

SignIn.propTypes = {
  resetForm: PropTypes.func,
  setSubmitting: PropTypes.func
};
export default SignIn;