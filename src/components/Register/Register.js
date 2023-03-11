import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { CustomLabel, FormBox, Image, Input, RegisterBox } from '../Styles/AllStyles';
import logo from '../../logos/logo.png';


const Register = () => {
    return (
        <RegisterBox>
            <Container maxWidth='lg'>
                <Box textAlign="center"
                    sx={{
                        py: 4,
                    }}
                >
                    <Image src={logo} alt="logo" height="60px" />
                </Box>
                <FormBox>
                    <Typography variant='h5' textAlign='center' component='h4'>
                        Register as a volunteer
                    </Typography>
                    <form >
                        <CustomLabel htmlFor="">Name</CustomLabel>
                        <Input placeholder='Enter Your Name' />
                        <CustomLabel htmlFor="">Email</CustomLabel>
                        <Input placeholder='Enter Your Email' />
                        <CustomLabel htmlFor="">Date</CustomLabel>
                        <Input type="date" />
                        <CustomLabel htmlFor="">Description</CustomLabel>
                        <Input placeholder='Description' />
                        <CustomLabel htmlFor="">Task</CustomLabel>
                        <Input />
                        <Button color='primary' type="submit" variant="contained" fullWidth>Register</Button>
                    </form>
                </FormBox>
            </Container>
        </RegisterBox>
    );
};

export default Register;