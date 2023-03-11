import { Container,Box, Typography, Button } from '@mui/material';
import React from 'react';
import { CustomTypography, FormBox, Image, LoginButton, RegisterBox } from '../Styles/AllStyles';
import logo from '../../logos/logo.png';
import { Google } from '@mui/icons-material';

const Login = () => {
    return (
        <RegisterBox>
            <Container maxWidth="lg">
                <Box textAlign="center"
                    sx={{
                        py: 4,
                    }}
                >
                    <Image src={logo} alt="logo" height="60px" />
                </Box>
                <FormBox height="250px">
                    <CustomTypography>
                            Login With Google
                    </CustomTypography>
                    <LoginButton startIcon={<Google />}>Continue With Google</LoginButton>
                </FormBox>
            </Container>
        </RegisterBox>
    );
};

export default Login;