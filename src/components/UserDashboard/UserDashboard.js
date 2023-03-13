import { Container, Grid, Box } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { RegistrationData } from '../../Contexts/Context';
import NavArea from '../HomePage/NavArea/NavArea';
import { RegisterBox } from '../Styles/AllStyles';
import SingleDashboardTask from './SingleTask/SingleDashboardTask';

const UserDashboard = () => {

    const [registrationData, setRegistrationData] = useContext(RegistrationData);
    const [dashboardData, setDashboardData] = useState([]);
    let date = (new Date()).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    useEffect(() => {
        fetch(`https://volunteer-network-feni.cyclic.app/registeredUserTask/${registrationData.userEmail}`)
            .then(response => response.json())
            .then(data => {
                setDashboardData(data.taskName);
            })
    }, [])
    return (
        <RegisterBox>
            <Container maxWidth="lg">
                <NavArea />
                <Box sx={{
                    marginTop: '100px',
                }}>
                    <Grid container rowGap={2}  columnGap={3} sx={{
                        justifyContent: 'center',
                    }}>
                        {
                            dashboardData?.map((data,index) => <SingleDashboardTask data={data} date={date} key={index*20}></SingleDashboardTask>)
                        }
                    </Grid>
                </Box>
            </Container>
        </RegisterBox>
    );
};

export default UserDashboard;