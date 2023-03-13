import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material';
import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';
import './Table.css';

const AdminDashboard = () => {

    const [registrateduserData, setRegisteredUserData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/registeredInfo')
            .then(response => response.json())
            .then(data => setRegisteredUserData(data));
    }, []);

    return (
        <Box>
            <Container maxWidth="lg">
                <Typography variant='h2' component="p" textAlign="center" py={3}>
                    Admin Panel
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '40px'
                }}>
                    <ButtonGroup variant="contained" >
                        <Link to="/admin/dashboard" state={{ data: registrateduserData  }}><Button>Volunteer Register List</Button></Link>
                        <Link to="/admin/addEvent"><Button>Add Event</Button></Link>
                    </ButtonGroup>
                </Box>

                <Suspense fallback={<LoadingScreen />}>
                    <Outlet />
                </Suspense>

            </Container>
        </Box>
    );
};

export default AdminDashboard;