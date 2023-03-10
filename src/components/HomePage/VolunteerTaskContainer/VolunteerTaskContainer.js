import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleTask from '../SingleTask/SingleTask';

const VolunteerTaskContainer = () => {

    const [volunteerTask,setVolunteerTask] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allVolunteerTask')
        .then(res => res.json())
        .then(data => setVolunteerTask(data))
    },[])


    return (
        <Container maxWidth="lg" >
            <Grid container spacing={2} mb={5}>
                {
                    volunteerTask?.map(task =><SingleTask task={task} key={task._id}></SingleTask>)
                }
            </Grid>
        </Container>
    );
};

export default VolunteerTaskContainer;