import React, { Suspense, useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { IsSignedInContext } from '../../Contexts/Context';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const PrivateRoute = (props) => {
    const { Component } = props;
    const { id } = useParams();
    const [isSignedIn, setIsSignedIn] = useContext(IsSignedInContext);
    return (
        <>
            {
                isSignedIn ? (
                    <Suspense fallback={<LoadingScreen />}>
                        <Component />
                    </Suspense>
                )
                    : (<Navigate to={`/login?regId=${id}`} />)
            }
        </>
    );
};

export default PrivateRoute;