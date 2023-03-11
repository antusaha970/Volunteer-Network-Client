import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomImage, CustomTypoForTask } from '../../Styles/AllStyles';

const SingleTask = ({ task }) => {
    const { workName, picture, imgAlt, bgCode,id } = task;
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate(`/register/${id}`);
    }

    return (
        <Grid item lg={3} md={3} sm={4} xs={12} sx={{
            cursor: 'pointer',
        }}  onClick={handleClick}>
            <CustomImage src={require(`../../../images/${picture}`)} alt={imgAlt} />
            <CustomTypoForTask variant="p" component="p" bgcolor={bgCode}>
                {
                    workName
                }
            </CustomTypoForTask>
        </Grid>
    );
};

export default SingleTask;