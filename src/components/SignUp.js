import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export function SignUp() {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email('Please enter valid email').required("Required"),
        password: Yup.string().min(6, "Password must contain at least 6 characters").required("Required")
    })

    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props);
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }

    
    return (
      
        <Grid>
            <Paper className='paperStyle'>
                <Grid align='center'>
                    <Avatar  style={{backgroundColor: "#1bbd7e"}}><AddCircleOutlineOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to enter Note App!</Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='First name' name="firstName"
                                placeholder='Enter first name' fullWidth required
                                helperText={<ErrorMessage className='errorMessage' name="firstName" />}
                            />
                             <Field as={TextField} label='Last name' name="lastName"
                                placeholder='Enter last name' fullWidth required
                                helperText={<ErrorMessage name="lastName" />}
                            />
                              <Field as={TextField} label='Email' name="email"
                                placeholder='Enter email' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                               style={{marginTop: "20px"}}>{props.isSubmitting ? "Loading" : "Sign up"}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>  
           
    );
}
