import * as React from "react";
import { Switch } from 'react-router-dom';
import { PublicRoute } from "./routers/PublicRoute";
import { PrivateRoute } from "./routers/PrivateRoute";

import LoginFeatures from '@/features/login'
import DashboardFeatures from '@/features/admin/dashboard';
import UserFeatures from '@/features/admin/user';
import BoardFeatures from '@/features/admin/board';

import './index.scss';

export const App : React.FC = () => (
    <>
    <Switch>
        <PublicRoute path="/" restricted={false} component={LoginFeatures}  exact/>
        <PublicRoute path="/login" restricted={false} component={LoginFeatures} />
        <PrivateRoute path="/admin/dashboard" component={DashboardFeatures}/>
        <PrivateRoute path="/admin/user" component={UserFeatures} />
        <PrivateRoute path="/admin/board" component={BoardFeatures} />
    </Switch>
    </>
);
