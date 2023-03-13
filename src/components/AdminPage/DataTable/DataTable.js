import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DataTable = () => {


   const location = useLocation();

    const registrateduserData = location.state?.data;

    const handleSendMail = (email) =>{
        console.log(email);
        fetch(`https://volunteer-network-feni.cyclic.app/sendMail?email=${email}`)
        .then(response => response.json())
        .then(data => {
            if(data){
                alert('Successfully sent the email');
            }
            else{
                alert('Failed to sent email');
            }
        });
    }

    return (
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
                        <td>Mail</td>
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
                            <td><Button onClick={()=>handleSendMail(`${user.userEmail}`)}>Mail</Button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </Box>
    );
};

export default DataTable;