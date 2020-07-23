import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from "./App";
import { Helmet } from 'react-helmet';
import { TITLE } from '@constants/index';
import './index.scss';

import createStore from './store';

const store = createStore();

ReactDOM.render(
    <>
        <Helmet titleTemplate={`%s · ${TITLE}`} defaultTitle={TITLE}>
        <meta
            name="description"
            content="Innogrid Container Management Platform - Shift Enter Cloudit"
        />
        </Helmet>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </>
  ,
  document.getElementById("output")
);
