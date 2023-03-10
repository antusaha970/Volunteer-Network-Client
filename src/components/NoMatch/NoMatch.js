import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/');
    }, 1500);
    return (
        <Box sx={{
            height:'100vh',
            width: '100%',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Typography variant="h1" textAlign="center">
                Not Found 404!!!
            </Typography>
            
        </Box>
    );
};

export default NoMatch;