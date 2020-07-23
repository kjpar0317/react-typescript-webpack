import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import { PublicRoute } from "./routers/PublicRoute";
import { PrivateRoute } from "./routers/PrivateRoute";

import LoginFeatures from '@features/login'
import DashboardFeatures from '@/features/admin/dashboard';
import UserFeatures from '@/features/admin/user';

export const App : React.FC = () => (
    <Switch>
        <PublicRoute path="/" restricted={false} component={LoginFeatures}  exact/>
        <PublicRoute path="/login" restricted={false} component={LoginFeatures} />
        <PrivateRoute path="/admin/dashboard" component={DashboardFeatures} exact/>
        <PrivateRoute path="/admin/user" component={UserFeatures} />
    </Switch>
);
