import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PublicProps extends RouteProps {
    restricted: boolean
};

export const PublicRoute : React.FC<PublicProps> = props => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        props.restricted ?
        <>
            aaa
        </>
        :
        <Route {...props} />
    );
};
