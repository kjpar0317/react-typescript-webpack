import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { DefaultTheme } from '@/layouts/default';

interface PrivateProps extends RouteProps {

};

export const PrivateRoute : React.FC<PrivateProps> = props => {
    if (sessionStorage.getItem('token'))  {
        return (
            <DefaultTheme>
                <Route {...props} />
            </DefaultTheme>
        );


    } else {
        return (
            <Redirect to="/login" />
        );
    }
};
