import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthorized from '../../hooks/useAuthorized';

type PrivateRouteProps = {
    children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {

    const isLogin = useAuthorized();

    return (
        <>
            {
                isLogin ? children : <Navigate to="/login" replace />
            }
        </>
    )
}

export default PrivateRoute;


