import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { IsSignedInContext } from '../../Contexts/Context';

const PrivateRoute = (props) => {
    const {Component}   = props;
    const {id} = useParams();
    const [isSignedIn,setIsSignedIn] = useContext(IsSignedInContext);
    return (
        <>
            {
                isSignedIn? <Component /> : <Navigate to={`/login?regId=${id}`} />
            }
        </>
    );
};

export default PrivateRoute;