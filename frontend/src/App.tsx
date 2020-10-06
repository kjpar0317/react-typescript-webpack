import * as React from "react";
import { Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { PublicRoute } from "./routers/PublicRoute";
import { PrivateRoute } from "./routers/PrivateRoute";

import LoginFeatures from '@/features/login'
import DashboardFeatures from '@/features/dashboard';
import locale_ko from '@/locale/ko.json';
import locale_en from '@/locale/en.json';

import './index.scss';

const messages = {
    ko: locale_ko,
    en: locale_en,
};

export const App : React.FC = () => (
  <IntlProvider locale="ko" messages={messages['ko']}>
    <Switch>
        <PublicRoute path="/" restricted={false} component={LoginFeatures}  exact/>
        <PublicRoute path="/login" restricted={false} component={LoginFeatures} />
        <PrivateRoute path="/dashboard" component={DashboardFeatures}/>
    </Switch>
  </IntlProvider>
);
