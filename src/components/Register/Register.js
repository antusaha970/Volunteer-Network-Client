import { Box, Button, Container, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { CustomLabel, FormBox, Image, Input, RegisterBox } from '../Styles/AllStyles';
import logo from '../../logos/logo.png';
import { useNavigate, useParams } from 'react-router-dom';
import { RegistrationData, UserInfoContext } from '../../Contexts/Context';


const Register = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useContext(UserInfoContext);
    const [registrationData, setRegistrationData] = useContext(RegistrationData);
    const [task,setTask] = useState({});
    const nameRef = useRef();
    const emailRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef();
    const taskRef = useRef();

    useEffect(()=>{
        fetch(`http://localhost:5000/getTask/${id}`)
        .then(response => response.json())
        .then(data => {
            setTask(data);
        })
    },[id])

    const handleRegister = (e) =>{
        e.preventDefault();
        const registerInfo = {
            userName: nameRef.current.value,
            userEmail: emailRef.current.value,
            date:  new Date(),
            description: descriptionRef.current.value,
            taskName: [taskRef.current.value]
        }
        setRegistrationData(registerInfo);

        fetch('http://localhost:5000/sendRegistrationInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })
        .then(response => response.json())
        .then(data => {
            navigate('/dashboard');
        })

    }
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
                        <Input  defaultValue={userInfo.name} ref={nameRef} />
                        <CustomLabel htmlFor="">Email</CustomLabel>
                        <Input  defaultValue={userInfo.email} ref={emailRef} required />
                        <CustomLabel htmlFor="">Date</CustomLabel>
                        <Input type="date" required   ref={dateRef} />
                        <CustomLabel htmlFor="">Description ( Optional )</CustomLabel>
                        <Input placeholder='Description' ref={descriptionRef} />
                        <CustomLabel htmlFor="">Task</CustomLabel>
                        <Input defaultValue={task.workName} ref={taskRef} />
                        <Button color='primary' type="submit" variant="contained" fullWidth onClick={handleRegister}>Register</Button>
                    </form>
                </FormBox>
            </Container>
        </RegisterBox>
    );
};

export default Register;