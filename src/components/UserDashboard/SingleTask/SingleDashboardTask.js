import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import pic from '../../../images/extraVolunteer.png';
import { CustomGridBox, Image2 } from '../../Styles/AllStyles';

const SingleDashboardTask = ({data,date}) => {
    return (
        <CustomGridBox item xs={12} sm={12} md={5} lg={5}>
            <Stack direction={{ xs: 'column', sm: 'row',lg:'row',md:'row' }} spacing={2}>
                <Box flex={1} sx={{
                    margin:{xs:"auto"}
                }}>
                    <Image2 src={pic} alt="Hands of help" width="180px" />
                </Box>
                <Box flex={1}>
                   <Typography variant='h5' component='p'>
                        {
                            data
                        }
                   </Typography>
                   <Typography variant='h6' component='p' sx={{
                        paddingTop: '10px',
                        color:'#FF7044;'
                   }}>
                        {
                            date
                        }
                   </Typography>
                   <Button>Cancel</Button>
                </Box>
            </Stack>
        </CustomGridBox>
    );
};

export default SingleDashboardTask;