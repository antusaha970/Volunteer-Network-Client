import { Container, Box } from '@mui/material';
import React, { useContext } from 'react';
import { CustomTypography, FormBox, Image, LoginButton, RegisterBox } from '../Styles/AllStyles';
import logo from '../../logos/logo.png';
import { Google } from '@mui/icons-material';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase/firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { IsSignedInContext, UserInfoContext } from '../../Contexts/Context';
import { useNavigate, useSearchParams } from 'react-router-dom';


const app = initializeApp(firebaseConfig);
const Login = () => {

    const [isSignedIn,setIsSignedIn] = useContext(IsSignedInContext);
    const [userInfo, setUserInfo] = useContext(UserInfoContext);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const param = searchParams.get('regId');


    const handleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setIsSignedIn(true);
                const userInfo = {
                    name: user.displayName,
                    email: user.email
                }
                setUserInfo(userInfo);
                navigate(`/register/${param}`);
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
                // ...
            });
    }

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
                    <LoginButton startIcon={<Google />} onClick={handleSignIn}>Continue With Google</LoginButton>
                </FormBox>
            </Container>
        </RegisterBox>
    );
};

export default Login;