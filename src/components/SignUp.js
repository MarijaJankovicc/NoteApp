import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useNavigate} from 'react-router-dom';


export function SignUp() {

    const navigate = useNavigate();

    const fields = [
        {
            id: 1,
            label: "First name",
            name: "firstName",
            placeholder: "Enter first name",
            type: "text"
        },
        {
            id: 2,
            label: "Last name",
            name: "lastName",
            placeholder: "Enter last name",
            type: "text"
        },
        {
            id: 3,
            label: "Email",
            name: "email",
            placeholder: "Enter email name",
            type: "email"
        },
        {
            id: 4,
            label: "Password",
            name: "password",
            placeholder: "Enter password",
            type: "password"
        },
        {
            id: 5,
            label: "Confirm password",
            name: "confirmPassword",
            placeholder: "Confirm password",
            type: "password"
        }
    ];
   
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Required").matches(/^[A-Za-z]+$/, 'This field cannot contain white space and special characters'),
        lastName: Yup.string().required("Required").matches(/^[A-Za-z]+$/, 'This field cannot contain white space and special characters'),
        email: Yup.string().email('Please enter valid email').required("Required"),
        password: Yup.string().min(6, "Password must contain at least 6 characters").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Required"),
    })

    const onSubmit = (values, props) => {
        setTimeout(() => {
            props.resetForm({
                values: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                },
            })
            props.setSubmitting(false)
        }, 2000)
    }

    
    return (
        <>
        <Grid>
            <Paper className='paperStyle'>
                <Grid align='center'>
                    <Avatar><AddCircleOutlineOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to enter Note App!</Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(formik) => (
                        <Form>
                            
                            {fields.map((item) => (
                                 <Field as={TextField} key={item.id} label={item.label}
                                 name={item.name} placeholder={item.placeholder} fullWidth required type={item.type}
                                 helperText={<ErrorMessage name={item.name} />}/>
                            ))}
                            <Button type='submit' color='primary' variant="contained"  disabled={ ((!(formik.isValid && formik.dirty)) || formik.isSubmitting) }
                               onClick={() => navigate("/app")}>SIGN UP
                            </Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>  
        </>
    );
}
