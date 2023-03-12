import React, { useContext, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { AdminLoginContext } from '../../../Contexts/Context';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';

const PrivateRouteAdmin = (props) => {
    const { Component } = props;
    const [isAdmin, setIsAdmin] = useContext(AdminLoginContext);
    return (
        <>
            {
                isAdmin ? (
                    <Suspense fallback={<LoadingScreen />}>
                        <Component />
                    </Suspense>
                ) : (
                    <Navigate to="/adminLogin" />
                )

            }
        </>
    );
};

export default PrivateRouteAdmin;