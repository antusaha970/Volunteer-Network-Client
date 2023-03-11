import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    const {Component}   = props;
    const auth = false;
    return (
        <>
            {
                auth? <Component /> : <Navigate to='/login' />
            }
        </>
    );
};

export default PrivateRoute;