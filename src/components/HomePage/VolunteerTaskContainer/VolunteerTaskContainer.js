import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleTask from '../SingleTask/SingleTask';

const VolunteerTaskContainer = ({volunteerTask,loading}) => {

    


    return (
        <Container maxWidth="lg" >
            {
                loading && <Typography variant='h1' textAlign='center'>
                    Loading ...
                </Typography>
            }
                <Grid container spacing={2} mb={5}>
                    {
                        volunteerTask?.map(task => <SingleTask task={task} key={task._id}></SingleTask>)
                    }
                </Grid>
        </Container>
    );
};

export default VolunteerTaskContainer;