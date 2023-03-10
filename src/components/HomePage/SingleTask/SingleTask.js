import { Grid } from '@mui/material';
import React from 'react';
import { CustomImage, CustomTypoForTask } from '../../Styles/AllStyles';

const SingleTask = ({ task }) => {
    const { workName, picture, imgAlt, bgCode } = task;
    return (
        <Grid item lg={3} md={3} sm={4} xs={12}>
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