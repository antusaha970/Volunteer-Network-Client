
import { Box, Container } from '@mui/material';
import React from 'react';
import { CustomButton, CustomSearch, CustomTypography } from '../../Styles/AllStyles';

const SearchSection = ({search,setSearch}) => {


    const handleChange = (e) =>{
        setSearch(e.target.value);
    }

    const handleSearchBtn = ()=> {
        const text = document.getElementById('searchInp').value;
        setSearch(text);
    }

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
                    <CustomSearch placeholder='Search...' id="searchInp" onChange={handleChange} />
                    <CustomButton variant='contained' onClick={handleSearchBtn}>Search</CustomButton>
                </Box>
            </Box>
        </Container>
    );
};

export default SearchSection;