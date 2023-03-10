
import { Box, Container } from '@mui/material';
import React from 'react';
import { CustomButton, CustomSearch, CustomTypography } from '../../Styles/AllStyles';

const SearchSection = () => {
    return (
        <Container maxWidth="lg">
            <Box textAlign='center'>
                <CustomTypography>
                    I grow by helping people in need.
                </CustomTypography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} my={4}>
                    <CustomSearch placeholder='Search...' />
                    <CustomButton variant='contained'>Search</CustomButton>
                </Box>
            </Box>
        </Container>
    );
};

export default SearchSection;