import { Delete } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Table.css';

const AdminDashboard = () => {

    const [registrateduserData, setRegisteredUserData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/registeredInfo')
            .then(response => response.json())
            .then(data => setRegisteredUserData(data));
    }, [])
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
                        <Button>Volunteer Register List</Button>
                        <Button>Add Event</Button>
                    </ButtonGroup>
                </Box>

                <Box sx={{
                    overflowX: 'auto'
                }}>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Date</td>
                                <td>Volunteering Tasks</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registrateduserData?.map(user => <tr key={user._id}>
                                    <td>{user.userName}</td>
                                    <td>{user.userEmail}</td>
                                    <td>{user.date}</td>
                                    <td>{user.taskName.toString()}</td>
                                    <td><Button>Delete</Button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </Box>

            </Container>
        </Box>
    );
};

export default AdminDashboard;