import { Box, Button, Container, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { CustomLabel, FormBox, Image, Input, RegisterBox } from '../Styles/AllStyles';
import logo from '../../logos/logo.png';
import { useParams } from 'react-router-dom';
import { UserInfoContext } from '../../Contexts/Context';


const Register = () => {
    const {id} = useParams();
    const [userInfo, setUserInfo] = useContext(UserInfoContext);
    const [task,setTask] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/getTask/${id}`)
        .then(response => response.json())
        .then(data => setTask(data))
    },[id])

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
                        <Input  defaultValue={userInfo.name}  />
                        <CustomLabel htmlFor="">Email</CustomLabel>
                        <Input  defaultValue={userInfo.email} required />
                        <CustomLabel htmlFor="">Date</CustomLabel>
                        <Input type="date" required />
                        <CustomLabel htmlFor="">Description ( Optional )</CustomLabel>
                        <Input placeholder='Description' />
                        <CustomLabel htmlFor="">Task</CustomLabel>
                        <Input defaultValue={task.workName} />
                        <Button color='primary' type="submit" variant="contained" fullWidth>Register</Button>
                    </form>
                </FormBox>
            </Container>
        </RegisterBox>
    );
};

export default Register;